class ImageItem {
    private static _count: number = 0;
    private _id: number;
  
    constructor(private imageUrl: string, private imageTitle: string, private imageDescription: string) {
      this._id = ++ImageItem._count;
    }
  }

let images: ImageItem[];
let selectedImage: ImageItem;