export default function ProductCard() {
  return (
    <div className="vtv vul vvf vvi vwy vwz vxh vxi vxk vxl vxp">
      <div className="vtv vul vvf vvi vvs vwt vwx vxh vxi vxk vxl vxp">
        <div className="w-full aspect-[480/480] vvl vwb">
          <img
            alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-04.jpg"
            className="vwf vwm vwg vwh vti"
          />
        </div>
        <div className="vuf vup vur vux vuz">
          <img
            alt="Back of zip tote bag with black canvas straps and handle, and black zipper pulls."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-02.jpg"
            className="vwf vwm vwg vwh vti"
          />
        </div>
        <div className="vuf vup vur vux vuz">
          <img
            alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-03.jpg"
            className="vwf vwm vwg vwh vti"
          />
        </div>
      </div>

      <div className="vua">
        <div className="vuf vup vur vux vuz">
          <h2 className="vzv vzy">Size</h2>
          <fieldset aria-label="Choose a size" className="vtv vul vvf vvi">
            <div className="vtv vul vvf vvi vvs vwt vwv">
              <label className="vtv vul vvf vvi vvs vwt vwu">
                <input
                  type="radio"
                  name="size"
                  value="18L"
                  defaultChecked
                  className="vts vtu vuo vwm"
                />
                <span className="vzq">18L</span>
              </label>
              <label className="vtv vul vvf vvi vvs vwt vwu">
                <input
                  type="radio"
                  name="size"
                  value="20L"
                  className="vts vtu vuo vwm"
                />
                <span className="vzq">20L</span>
              </label>
              <label className="vtv vul vvf vvi vvs vwt vwu">
                <input
                  type="radio"
                  name="size"
                  value="40L"
                  className="vts vtu vuo vwm"
                />
                <span className="vzq">40L</span>
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
