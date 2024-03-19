abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // Some complex calcualtion
    return 8;
  }
}

// You cannot create objects from abstract classes. You can for interfaces.

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

const bc = new Instagram("test", "Test", 3);

bc.getReelTime();
