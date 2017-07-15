import fetch from '../config/fetch'
var addImage = (image) => fetch('POST', '/image/add', {
    itemId: image.itemId,
    imageName: image.imageName,
});
var deleteImage = (image) => fetch('POST', '/image/delete', {
    itemId: image.itemId,
    imageName: image.imageName,
});
var findImageByItemId = (itemId) => fetch('POST', '/image/findimagebyitemid', {
    itemId: itemId,
});
export { addImage, deleteImage, findImageByItemId }