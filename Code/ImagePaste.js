import { request } from "../../requestV2";
const DataFlavor = java.awt.datatransfer.DataFlavor;
const Toolkit = java.awt.Toolkit;
const ByteArrayOutputStream = java.io.ByteArrayOutputStream;
const Base64 = java.util.Base64;
const ImageIO = javax.imageio.ImageIO;
const StringSelection = java.awt.datatransfer.StringSelection;

const imgurId = "5fb1d710fa4fbd8";

const getImageFromClipboard = () => {
  try {
    const content = Toolkit.getDefaultToolkit()
      .getSystemClipboard()
      .getContents(null);

    if (!content?.isDataFlavorSupported(DataFlavor.imageFlavor)) return null;

    return content.getTransferData(DataFlavor.imageFlavor);
  } catch (e) {
    // Some other program has access to the clipboard right now, e.g. windows + v
    return null;
  }
};

const copyToClipboard = (text) => {
  try {
    const stringSelection = new StringSelection(text);
    const clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
    clipboard.setContents(stringSelection, null);
  } catch (e) {
    // Some other program has access to the clipboard right now, e.g. windows + v
  }
};

const imageToB64 = (image) => {
  let os = new ByteArrayOutputStream();
  ImageIO.write(image, "png", os);
  return Base64.getEncoder().encodeToString(os.toByteArray());
};

const uploadToImgur = (image) => {
  return request({
    url: "https://api.imgur.com/3/image",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Client-ID ${imgurId}`,
    },
    body: {
      image,
    },
    json: true,
  });
};

let toggle = true;

const uploading = "[UPLOADING]";

register("tick", () => {
  if (!Client.isInChat()) return;
  const clipboard = getImageFromClipboard();
  if (!toggle || clipboard === null) return;

  if (
    Keyboard.isKeyDown(Keyboard.KEY_LCONTROL) &&
    Keyboard.isKeyDown(Keyboard.KEY_V)
  ) {
    toggle = false;
    Client.setCurrentChatMessage(Client.getCurrentChatMessage() + uploading);

    uploadToImgur(imageToB64(clipboard))
      .then(({ data: { link } }) => {
        Client.setCurrentChatMessage(
          Client.getCurrentChatMessage().replace(uploading, link)
        );
        copyToClipboard(link);
        toggle = true;
      })
      .catch((err) => {
        console.error("Error sending imgur link:", err);
        toggle = true;
      });
  }
});
