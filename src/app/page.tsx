import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

/*const mockUrls = [
  "https://utfs.io/f/9b247e72-b2ac-4f93-8800-13e75784e016-1ody.jpg",
  "https://utfs.io/f/3538f835-0ea1-4f92-8f97-3db33294f447-1ody.jpg",
  "https://utfs.io/f/35522c16-42ed-438e-9dd1-f081243e5bde-1ody.jpg",
  "https://utfs.io/f/0a2e60fc-b46a-4e0c-beee-4b67c926961c-t12k1.jpg",
  "https://utfs.io/f/c4ea90f6-64f5-4e85-9090-14668544b849-2a.jpg",
  "https://utfs.io/f/307e3d9b-43d8-4741-991a-2a86923fc9a7-ojzwv9.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

<div>{image.createdAt.toString()}</div>
*/

export default async function HomePage() {
  const images = await getMyImages().catch((error)=>{
    console.error(error);
    return null;
  });
  return (
      <main className="">
        <div className="flex flex-wrap gap-4 items-center ">
        {images?.map((image, index) => (
          <div key={image.id} className="w-48">
              <img src={image.url} />
              <div>{image.name}</div>
          
        </div>
        ))}
        </div>
      </main>
  );
};
