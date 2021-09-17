using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using ZXing;
using ZXing.Common;
//using ZXing.CoreCompat.System.Drawing;
namespace WebCamLabWASM.Pages
{
    public class fakeme
    {
        public fakeme()
        {

            // var bitmap = new Bitmap();
            //LuminanceSource source;
            //source = new ZXing.CoreCompat.System.Drawing.BitmapLuminanceSource(bitmap);
            //BinaryBitmap b = new BinaryBitmap(new HybridBinarizer(source));
            //Result result = new MultiFormatReader().decode(b);
            var stream = new MemoryStream();
            var barcodeBitmap = new System.DrawingCore.Bitmap(stream);
            var reader = new ZXing.ZKWeb.BarcodeReader();
            var result = reader.Decode(barcodeBitmap);
        }
    }
}
