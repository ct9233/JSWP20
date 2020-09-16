const count = 10;
const apiKey = 'OimhfVmNPtx_azc2gJyfznCVhU5RkPW4u50RY3d6X6E';
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    } catch (error) {

    }
}

getPhotos();