Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @'
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;

public static class BackgroundRemoval {
  static bool IsBackdrop(Color c) {
    return c.G - Math.Max(c.R, c.B) >= 45;
  }

  static double Distance(Color a, Color b) {
    return Math.Sqrt(Math.Pow(a.R-b.R,2)+Math.Pow(a.G-b.G,2)+Math.Pow(a.B-b.B,2));
  }

  public static void Remove(string input, string output) {
    using (var source = new Bitmap(input))
    using (var result = new Bitmap(source.Width, source.Height, PixelFormat.Format32bppArgb)) {
      int w = source.Width, h = source.Height;
      bool[] outside = new bool[w * h];
      var queue = new Queue<int>();
      Action<int,int> seed = (x,y) => {
        int i = y * w + x;
        if (!outside[i] && IsBackdrop(source.GetPixel(x,y))) { outside[i] = true; queue.Enqueue(i); }
      };
      for (int x=0; x<w; x++) { seed(x,0); seed(x,h-1); }
      for (int y=0; y<h; y++) { seed(0,y); seed(w-1,y); }
      int[] dx = {1,-1,0,0}, dy = {0,0,1,-1};
      while (queue.Count > 0) {
        int i = queue.Dequeue(), x = i % w, y = i / w;
        for (int k=0; k<4; k++) {
          int nx=x+dx[k], ny=y+dy[k];
          if (nx<0 || ny<0 || nx>=w || ny>=h) continue;
          int ni=ny*w+nx;
          Color next = source.GetPixel(nx,ny);
          if (!outside[ni] && IsBackdrop(next)) { outside[ni]=true; queue.Enqueue(ni); }
        }
      }
      for (int y=0; y<h; y++) for (int x=0; x<w; x++) {
        Color c=source.GetPixel(x,y);
        result.SetPixel(x,y,outside[y*w+x] ? Color.FromArgb(0,c.R,c.G,c.B) : Color.FromArgb(255,c.R,c.G,c.B));
      }
      result.Save(output, ImageFormat.Png);
    }
  }
}
'@
$inputPath = (Resolve-Path 'tmp\imagegen\mockup-v2-source.png').Path
$outputPath = Join-Path (Get-Location) 'src\assets\mockup-ebook-v2.png'
[BackgroundRemoval]::Remove($inputPath, $outputPath)
$cutout = [System.Drawing.Image]::FromFile($outputPath)
$preview = New-Object System.Drawing.Bitmap $cutout.Width,$cutout.Height
$graphics = [System.Drawing.Graphics]::FromImage($preview)
$graphics.Clear([System.Drawing.Color]::FromArgb(3,3,3))
$graphics.DrawImage($cutout,0,0)
$graphics.Dispose()
$cutout.Dispose()
$preview.Save((Join-Path (Get-Location) 'tmp\imagegen\preview-black.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$preview.Dispose()
