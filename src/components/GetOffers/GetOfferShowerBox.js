import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../Dashboard/Navbar';
import alertify from 'alertifyjs';
import '../../assets/scss/getOffer.scss';
import { useNavigate } from 'react-router';
import axios from 'axios';
import 'alertifyjs/build/css/alertify.min.css';
import AuthLocalStorage from '../localStorage';

function info1() {
  alertify.alert('Seçilecek Ürünler Hakkında', 'Hangi tarz duş kabini istediğinizi seçiniz. Altında plastik havuz olanlar tekneli, olmayanlar teknesiz olarak adlandırılır. Duvardan duvara ve oval seçeneklerinde de tekneli ürünler mevcuttur. hangisini ne şekilde istediğinizi açıklama olarak yazabilirsiniz.');
}

function info2() {
  alertify.alert('Duş kabini cam seçimi hakkında', 'Duş kabininiz için istediğiniz cam seçimini seçiniz.Temperli camlar dayanıklı olması adına fırınlanmış camlardır. Mika sert plastik olarak üretilir. Uygun maliyetlidir.')
}

function info3() {
  alertify.alert('En boy ölçüsü hakkında', 'Montaj yaptırmak istediğiniz yer için uygun olan en boy ölçüsünü metre yardımıyla alarak seçiminizi yapabilirsiniz. Direk sizde olan ölçü burada yok ise yakın olanı seçip açıklama kısmında firmalar için bu bilgiyi ekleyerek daha doğru fiyat teklifleri alabilirsiniz.')
}

function info4() {
  alertify.alert('Teklif Kontrol', 'Teklifinizi aşağıdaki kutudan kontrol ediniz. Eğer istemediğiniz ya da yanlış olan seçim varsa o adıma geri gidip düzenleyebilirsiniz.');
}

const GetOfferShowerBox = () => {

  const [divs, setDivs] = useState(1);
  const [inputCheck, setInputCheck] = useState();
  const [inputCheck1, setInputCheck1] = useState();
  const [inputCheck2, setInputCheck2] = useState();
  const [textArea, setTextArea] = useState();

  const { accessToken, id, name, surName, il } = AuthLocalStorage();

  const navigate = useNavigate();
  const saveOffer = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/Offers', {
        productName: inputCheck,
        productWidth: inputCheck1,
        productHeight: inputCheck2,
        userComment: textArea,
        userId: id,
        userName: name,
        userSurName: surName,
        userCity: il
      }, { headers: { Authorization: `Bearer ${accessToken}` } })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='getOfferShowerBoxContent'>

        {divs === 1 ?

          <div id='step1Shower'>
            <div className='UserSettingAll'>
              <div className='getoffer-text'>(1.Adım)<br /><hr />Montaj yapılacak duş kabini türünü seçiniz</div>
              <div className="radiogroup">
                <div className="wrapper">
                  <input className="state" type="radio" name="showerCabin" id="a5" value="Teknesiz duş kabini" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="a5">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Teknesiz Duş Kabini</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="showerCabin" id="b5" value="Tekneli duş kabini" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="b5">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Tekneli Duş Kabini</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="showerCabin" id="c5" value="Duvardan duvara duş kabini" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="c5">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Duvardan Duvara</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="showerCabin" id="d5" value="Oval duş kabini" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="d5">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Oval</span>
                  </label>
                </div>
              </div>
              <div className="buttons">
                <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                <hr />
                <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                <hr />
                <Link className="getOfferLinkButton" to='/getOffer/category'><i className="fa-solid fa-house"></i> Kategorilere Dön</Link>
              </div>
            </div>
          </div> : divs === 2 ?

            <div id='step2Shower'>
              <div className='UserSettingAll'>
                <div className='getoffer-text'>(2.Adım)<br /><hr />Montaj yapılacak duş kabini için cam türünü seçiniz</div>
                <div className="radiogroup">
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="a6" value="Temperli Cam" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="a6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Temperli</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="b6" value="Mika Cam" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="b6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Mika</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="c6" value="Buzlu Cam" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="c6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Buzlu</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="d6" value="Desenli Cam" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="d6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Desenli</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="e6" value="Düz Cam" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="e6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Düz Cam</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="f6" value="Farketmez / Bilmiyorum" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="f6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Farketmez / Bilmiyorum</span>
                    </label>
                  </div>
                </div>
                <div className="buttons">
                  <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                  <hr />
                  <button onClick={info2} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                  <hr />
                  <button className="getOfferButton" onClick={() => { setDivs(1) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                </div>
              </div>
            </div> : divs === 3 ?

              <div id='step3Shower'>
                <div className='UserSettingAll'>
                  <div className='getoffer-text'>(3.Adım)<br /><hr />Montaj yapılacak duş kabini için ölçünüzü seçiniz</div>
                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="a7" value="80x80 cm'den daha küçük" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="a7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>80x80 cm'den daha küçük</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="b7" value="90x90 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="b7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>90x90 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="c7" value="100x70 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="c7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>100x70 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="d7" value="100x80 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="d7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>100x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="e7" value="110x80 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="e7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>110x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="f7" value="120x80 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="f7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>120x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="g7" value="130x80 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="g7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>130x80 cm</span>
                      </label>
                    </div>
                  </div>
                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="h7" value="150x80 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="h7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>150x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="i7" value="160x80 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="i7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>160x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="j7" value="170x70cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="j7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>170x70cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="k7" value="170x80 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="k7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>170x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="l7" value="180x70 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="l7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>180x70 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="m7" value="170x80 cm" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="m7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>170x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="n7" value="200x80 cm'den daha büyük" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="n7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>200x80 cm'den daha büyük</span>
                      </label>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                    <hr />
                    <button onClick={info3} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                    <hr />
                    <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                  </div>
                </div>
              </div> : divs === 4 ?

                <div id='step4Shower'>
                  <div className='UserSettingAll'>
                    <div className='getoffer-text'>(4.Adım)<br /><hr />Aklınıza gelen diğer detayları yazablirsiniz.</div>
                    <div className="radiogroup-ex">

                      <textarea className="getOffer-input" type="text" onChange={e => setTextArea(e.target.value)} placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)' />
                    </div>
                    <div className="buttons">
                      <button className="getOfferButton" onClick={() => { setDivs(5) }}><i className="fa-solid fa-eye"></i> Teklifimi Göster</button>
                      <hr />
                      <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                    </div>
                  </div>
                </div> : divs === 5 ?

                  <div id='step5Shower'>
                    <div className='UserSettingAll'>
                      <div className='getoffer-text'>Teklifinizi gözden geçiriniz.</div>
                      <div className="radiogroupPrev">

                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Seçilen Ürün:</div>
                            <i className="fa-solid fa-check tik "></i>
                            <div className='textOfferCssOut'>{inputCheck}</div>
                          </label>
                        </div>
                        <hr />
                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Cam Çeşidi:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCssOut'>{inputCheck1}</div>
                          </label>
                        </div>
                        <hr />
                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Duş Kabini Ölçüsü:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCssOut'>{inputCheck2}</div>
                          </label>
                        </div>
                        <hr />
                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Açıklamanız:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCssOut'>{textArea}</div>
                          </label>
                        </div>
                      </div>
                      <div className="buttons">
                        <button onClick={(e) => saveOffer(e)} className="getOfferButton"><i className="fa-solid fa-upload"></i> Teklif Yayınla</button>
                        <hr />
                        <button onClick={info4} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                        <hr />
                        <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Sayfa</button>
                        <hr />
                        <Link className="getOfferLinkButton" to='/getOffer/category'><i className="fa-solid fa-circle-xmark"></i> İptal / Ana Menü</Link>
                      </div>
                    </div>
                  </div> : null}

      </div>
    </div>
  )
}
export default GetOfferShowerBox;