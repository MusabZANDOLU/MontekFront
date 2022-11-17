import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/getOfferCategory.scss";
import { useEffect } from "react";
import alertify from 'alertifyjs'


const GetOfferCategoryShow = () => {

  useEffect(() => {
    infoShowPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const infoShowPage = async () => {
    alertify.alert( 'Site Mesajı', 'Bu sayfa yalnızca önizleme amaçlıdır. Teklif almak için öncelikle kayıt olmalı sonrasında giriş yapmalısınız.', function () { alertify.success('Teşekkür ederiz'); });
  };

  return (
    <div className="categoryAllContent">
      <Navbar />
      <div className="categoryTitleShow">

      </div>
      <div className="infoShowTitle">(1.ADIM) Bu sayfada kategoriler arasından ürün seçimleri yapılarak teklif işlemleri başlatılır..</div>
      <div className="cards-list">
        {/* <div className="infoShow1">Bu sayfada ürün kategorileri bulunup kategor Seçimi yapılır.</div> */}
        <div className="categoryCardOne">
          <div className="card 1">
            <div className="card_image">
              <img
                src={require("../../assets/images/category/categoryKatlanir.jpg")}
                alt=""
              ></img>
            </div>
          </div>
          <div className="cardText">
            BALKON KAPATMA <br />
            ÜRÜNLERİ
          </div>
        </div>

        <div className="categoryCardOne">
          <div className="card 2">
            <div className="card_image">
              <img
                src={require("../../assets/images/category/categoryPvc.jpg")}
                alt=""
              ></img>
            </div>
          </div>
          <div className="cardText">
            PVC CAM & KAPI <br />
            ÜRÜNLERİ
          </div>
        </div>

        <div className="categoryCardOne">
          <div className="card 4">
            <div className="card_image">
              <img
                src={require("../../assets/images/category/categoryMagaza.jpg")}
                alt=""
              ></img>
            </div>
          </div>
          <div className="cardText">
            MAĞAZA CAM & KAPI <br />
            ÜRÜNLERİ
          </div>
        </div>
      </div>

      <hr/>


      {/* <div>Bazı spesifik özellikleri ve ölçüleri yakın olacak şekilde işaretleriz.</div> */}
      <div className='UserSettingAllShow'>
        <div className="flexShow">
          <div className="infoShowTitle">(2.ADIM) Ürün boyut, renk, cam vb özellikler seçilir. Yakın seçimler dahilinde firmalarımız sizlere fiyat aralıkları vermeye hazırlardır.</div>
          {/* <div className="infoShow1">Ürün boyut, renk, cam vb özellikler seçilir</div> */}
          <div className="flexShowRadios">
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="productNamePvc" value="PVC Cam" />
                <label className="label" htmlFor="a">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>PVC Cam</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNamePvc" value="PVC Kapı" />
                <label className="label" htmlFor="b">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>PVC Kapı</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNamePvc" value="Sürme Kapı" />
                <label className="label" htmlFor="d">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Sürme Kapı</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNamePvc" value="Çelik Kapı" />
                <label className="label" htmlFor="e">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Çelik Kapı</span>
                </label>
              </div>
            </div>
            
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="swatterName" value="Balkon" />
                <label className="label" htmlFor="a">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Balkon</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="swatterName" value="Merdiven" />
                <label className="label" htmlFor="b">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Merdiven</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="swatterName" value="Pencere Önü" />
                <label className="label" htmlFor="e">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Pencere Önü</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="swatterName" value="Teras" />
                <label className="label" htmlFor="f">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Teras</span>
                </label>
              </div>
            </div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" value="2 m" />
                <label className="label" htmlFor="a1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>2 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" value="3 m" />
                <label className="label" htmlFor="b1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>3 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" value="4 m" />
                <label className="label" htmlFor="c1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>4 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" value="5 m" />
                <label className="label" htmlFor="d1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>5 m</span>
                </label>
              </div>
            </div>
            <div className="radiogroupVisible">
              <div className="wrapper">
                <input className="state" type="radio" name="swatterPiece" id="i2" value="3 adet alüminyum çubuklu gövde" />
                <label className="label">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>3 adet alüminyum çubuklu gövde</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="swatterPiece" id="j2" value="Temperli şeffaf camlı gövde" />
                <label className="label">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Temperli şeffaf camlı gövde</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="swatterPiece" id="l2" value="Temperli füme camlı gövde" />
                <label className="label">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Temperli füme camlı gövde</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="swatterPiece" id="m2" value="Temperli reflekte camlı gövde" />
                <label className="label">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Temperli reflekte camlı gövde</span>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr/>
      <div id='step7Folding'>
        <div className="infoShowTitle">(3.ADIM) Yapılan önizleme ardından "Teklifi Yayınla" butonu ile verilen bilgileriniz firmalarımıza iletilir.</div>
        <div className='UserSettingAllShow'>
          <div className='getofferTextShow'>Teklifinizi gözden geçiriniz. <br /> (Örnektir!)</div>
          <div className="radiogroupPrevShow">

            <div className="wrapper">
              <label className="label">
                <div className='textPrev'>Seçilen Ürün:</div>
                <i className="fa-solid fa-check tik"></i>
                <div className='textOfferCssOut'>Katlanır Cam</div>
              </label>
            </div>
            <hr />
            <div className="wrapper">
              <label className="label">
                <div className='textPrev'>Balkon Genişlik:</div>
                <i className="fa-solid fa-check tik"></i>
                <div className='textOfferCssOut'>5 m</div>
              </label>
            </div>
            <hr />
            <div className="wrapper">
              <label className="label">
                <div className='textPrev'>Balkon Yükseklik:</div>
                <i className="fa-solid fa-check tik"></i>
                <div className='textOfferCssOut'>220 cm</div>
              </label>
            </div>
            <hr />
            <div className="wrapper">
              <label className="label">
                <div className='textPrev'>Balkon Şekli:</div>
                <i className="fa-solid fa-check tik"></i>
                <div className='textOfferCssOut'>Gömme Balkon</div>
              </label>
            </div>
            <hr />
            <div className="wrapper">
              <label className="label">
                <div className='textPrev'>Cam Çeşidi:</div>
                <i className="fa-solid fa-check tik"></i>
                <div className='textOfferCssOut'>Füme Cam</div>
              </label>
            </div>
            <hr />
            <div className="wrapper">
              <label className="label">
                <div className='textPrev'>Açıklama:</div>
                <i className="fa-solid fa-check tik"></i>
                <div className='textOfferCssOut'>Şeffaf Cam içinde teklif almak istiyorum / Balkon köşesinde kombi deliği olacak / Mermerde istiyorum vb. </div>
              </label>
            </div>

          </div>
          <div className="buttonsShow">
            <button className="getOfferButton"><i className="fa-solid fa-upload"></i> Teklif Yayınla</button>
            <hr />
            <button className="getOfferButton"><i className="fa-solid fa-arrow-left-long"></i> Önceki Sayfa</button>
          </div>
        </div>
      </div>
      <hr/>

      <div className="infoShowTitle">"Tekliflerim" sayfamızdan oluşturduğunuz tüm istekleri görebilir, "Gelen Teklifler" butonu ile firmalarımızın siz kullanıcılarımıza verdiği fiyat teklifi, son geçerlilik tarihi vb. bilgileri rahatlıkla görebilir ve dilediğinize karar verebilirsiniz.</div>
      <br/>
      <div className="flexShowRadios">
        <div className="radiogroupMyOfferShow">
          <div>
            <div>
              <div className="myOfferAllCol">
                <div className="myOfferLeftCol">
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Ürün:
                        <br />
                        <hr />
                        Katlanır Cam
                      </div>
                    </label>
                  </div>
                  <br />
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Detaylar:
                        <br />
                        <hr />
                        Genişlik: 5m
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Yükseklik: 220 cm
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Gömme Balkon
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Füme Cam
                      </div>
                    </label>
                  </div>
                </div>
                <div className="myOfferRightCol">
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Açıklamam:
                        <br />
                        <hr />
                        Şeffaf Cam ve altınmeşe renk için de teklif almak istiyorum vb...
                      </div>
                    </label>
                  </div>
                  <br />
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Teklif Tarihim:
                        <br />
                        <hr />
                        01/01/2020
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="downButtons">
                <div className="myOfferDetailBtn">
                  <div>
                    <button className="myOfferBtn">Gelen tekliflerim.</button>
                  </div>
                </div>
                <div className="myOfferDeleteBtn">
                  <i className="fa-solid fa-trash myOfferBtnDelete"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="radiogroupMyOfferShow">
          <div>
            <div>
              <div className="myOfferAllCol">
                <div className="myOfferLeftCol">
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Ürün:
                        <br />
                        <hr />
                        Katlanır Cam
                      </div>
                    </label>
                  </div>
                  <br />
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Detaylar:
                        <br />
                        <hr />
                        Genişlik: 5m
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Yükseklik: 220 cm
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Gömme Balkon
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Füme Cam
                      </div>
                    </label>
                  </div>
                </div>
                <div className="myOfferRightCol">
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Açıklamam:
                        <br />
                        <hr />
                        Balkonumda eski alüminyum korkuluk var. Onlarında sökülmesini istiyorum. Teşekkürler vb...
                      </div>
                    </label>
                  </div>
                  <br />
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Teklif Tarihim:
                        <br />
                        <hr />
                        01/01/2020
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="downButtons">
                <div className="myOfferDetailBtn">
                  <div>
                    <button className="myOfferBtn">Gelen tekliflerim.</button>
                  </div>
                </div>
                <div className="myOfferDeleteBtn">
                  <i className="fa-solid fa-trash myOfferBtnDelete"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="radiogroupMyOfferShow">
          <div>
            <div>
              <div className="myOfferAllCol">
                <div className="myOfferLeftCol">
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Ürün:
                        <br />
                        <hr />
                        Sürme Cam
                      </div>
                    </label>
                  </div>
                  <br />
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Detaylar:
                        <br />
                        <hr />
                        Genişlik: 8m
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Yükseklik: 180 cm
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        L Balkon
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Şeffaf Cam
                      </div>
                    </label>
                  </div>
                </div>
                <div className="myOfferRightCol">
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Açıklamam:
                        <br />
                        <hr />
                        Aynı uzunluk adına mermer fiyatı da verebilir misiniz? vb...
                      </div>
                    </label>
                  </div>
                  <br />
                  <div>
                    <label className="label">
                      {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                      <div className="textGiveOfferCss">
                        Teklif Tarihim:
                        <br />
                        <hr />
                        10/10/2020
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="downButtons">
                <div className="myOfferDetailBtn">
                  <div>
                    <button className="myOfferBtn">Gelen tekliflerim.</button>
                  </div>
                </div>
                <div className="myOfferDeleteBtn">
                  <i className="fa-solid fa-trash myOfferBtnDelete"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>
    </div>
  );
};
export default GetOfferCategoryShow;
