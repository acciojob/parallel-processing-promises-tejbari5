//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(image) {
            return new Promise((resolve, reject) => {
                const imgElement = new Image();
                imgElement.onload = () => resolve(imgElement);
                imgElement.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
                imgElement.src = image.url;
            });
        }

btn.addEventListener('click', async () => {
            
            output.innerHTML = ''; // Clear previous content

            try {
                const downloadedImages = await Promise.all(images.map(downloadImage));
                downloadedImages.forEach(imgElement => {
                    output.appendChild(imgElement);
                });
            } catch (error) {
                console.error(error);
            }
        });