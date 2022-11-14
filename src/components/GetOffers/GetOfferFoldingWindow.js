import Navbar from '../Dashboard/Navbar';
import alertify from 'alertifyjs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../../assets/scss/getOffer.scss';
import 'alertifyjs/build/css/alertify.min.css';
import AuthLocalStorage from '../localStorage';
import { BASE_URL } from '../../base';

function info1() {
  alertify.alert('Seçilecek Ürünler Hakkında', 'Balkonunuza hangi ürünün montajını yaptırmak istiyorsanız seçiniz. Adaptörlü cam ortasında kayıt olmayan camdır');
}

function info2() {
  alertify.alert('Balkon En Ölçüsü Hakkında', 'Balkonunuzun bir ucundan diğerine olacak şekilde metre yardımıyla ölçünüz. L ya da U şeklindeki balkonlar için tek balkon gibi düşünüp ölçünüzü alabilirsiniz.');
}

function info3() {
  alertify.alert('Balkon Yükseklik Ölçüsü Hakkında', 'Balkonunuzun zeminde mermerden tavana ölçüsünü alarak yazabilirsiniz. Daha doğru sonuçlar için balkonun enine baş orta ve sondan yükseklik ölçğsü alabilirsiniz.');
}

function info4() {
  alertify.alert('Balkon Türü Hakkında', 'Balkonunuzun şekil olarak yanları duvar ise gömme, tek tarafı duvar ise L, iki tarafıda dışa doğru ise U , oval ise yay balkon şeklinde olabilir.');
}

function info5() {
  alertify.alert('Ürün Cam Rengi Hakkında', 'Şeffaf: renksiz, Füme: Koyu Renkte: Reflekte: Aynalı yapıda, Buzlu: Buzlu, Bronze: Koyu Altın Sarısı...');
}

function info6() {
  alertify.alert('Teklif Kontrol', 'Teklifinizi aşağıdaki kutudan kontrol ediniz. Eğer istemediğiniz ya da yanlış olan seçim varsa o adıma geri gidip düzenleyebilirsiniz.');
}
const GetOfferFoldingWindow = () => {

  const [divs, setDivs] = useState(1);
  const [inputCheck, setInputCheck] = useState();
  const [inputCheck1, setInputCheck1] = useState();
  const [inputCheck2, setInputCheck2] = useState();
  const [inputCheck3, setInputCheck3] = useState();
  const [inputCheck4, setInputCheck4] = useState();
  const [textArea, setTextArea] = useState();
  const navigate = useNavigate();

  const { accessToken, id, name, surName, il } = AuthLocalStorage()

  const saveOffer = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/Offers`, {
        productName: inputCheck,
        productWidth: inputCheck1,
        productHeight: inputCheck2,
        productPlace: inputCheck3,
        productWindow: inputCheck4,
        userComment: textArea,
        userId: id,
        userName: name,
        userSurName: surName,
        userCity: il
      }, { headers: { Authorization: `Bearer ${accessToken}` } })

      navigate("/myOffers")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='getOfferBody'>
      <Navbar />

      <div className='get-tt'>
        {divs === 1 ?

          <div id='step1Folding'>
            <div className='UserSettingAll'>
              <div className='getoffer-text'>(1.Adım)<br /><hr />Teklif vermek istediğiniz ürünü seçiniz</div>
              <div className="radiogroup">
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameFolding" id="a" value="Katlanır Cam" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="a">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Katlanır Cam</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameFolding" id="b" value="Sürme Cam" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="b">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Sürme Cam</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameFolding" id="c" value="PVC Cam" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="c">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>PVC Cam</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameFolding" id="d" value="PVC Sürme Cam" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="d">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>PVC Sürme Cam</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameFolding" id="e" value="PVC Adaptörlü Cam" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="e">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>PVC Adaptörlü Cam</span>
                  </label>
                </div>
              </div>

              <div className="buttons">
                <button className="getOfferButton" onClick={() => {inputCheck ? setDivs(2) : alert('Devam edebilmek için önce seçim yapınız!')}}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                <hr />
                <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                <hr />
                <Link className="getOfferLinkButton" to='/getOffer/category'><i className="fa-solid fa-house"></i> Kategorilere Dön</Link>
              </div>
            </div>
          </div> : divs === 2 ?

            <div id='step2Folding'>
              <div className='UserSettingAll'>
                <div className='getoffer-text'>(2.Adım)<br /><hr />Ürün montaj yerinin genişliğini seçiniz.</div>
                <div className="radiogroup">
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="a1" value="2 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="a1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>2 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="b1" value="3 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="b1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>3 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="c1" value="4 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="c1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>4 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="d1" value="5 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="d1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>5 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="e1" value="6 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="e1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>6 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="f1" value="8 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="f1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>8 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="g1" value="10 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="g1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>10 m</span>
                    </label>
                  </div>
                </div>

                <div className="radiogroup">
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="h1" value="12 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="h1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>12 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="i1" value="15 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="i1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>15 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="j1" value="18 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="j1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>18 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="k1" value="20 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="k1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>20 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="l1" value="25 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="l1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>25 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="m1" value="30 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="m1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>30 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthFolding" id="n1" value="35+ m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="n1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>35+ m</span>
                    </label>
                  </div>
              
                </div>
                <div className="buttons">
                  <button className="getOfferButton" onClick={() => {inputCheck1 ? setDivs(3) : alert('Devam edebilmek için öncelikle seçim yapınız!') }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                  <hr />
                  <button className="getOfferButton" onClick={info2}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                  <hr />
                  <button className="getOfferButton" onClick={() => { setDivs(1) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                </div>
              </div>
              
            </div> : divs === 3 ?

              <div id='step3Folding'>
                <div className='UserSettingAll'>
                  <div className='getoffer-text'>(3.Adım)<br /><hr />Ürün montaj yerin yüksekliğini seçiniz</div>
                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="a2" value="1.00 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="a2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.00 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="b2" value="1.30 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="b2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.30 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="c2" value="1.50 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="c2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.50 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="d2" value="1.70 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="d2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.70 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="e2" value="1.80 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="e2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.80 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="f2" value="1.90 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="f2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.90 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="g2" value="2.00 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="g2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.00 m</span>
                      </label>
                    </div>
                  </div>

                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="h2" value="2.10 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="h2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.10 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="i2" value="2.20 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="i2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.20 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="j2" value="2.50 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="j2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.50 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="k2" value="2.70 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="k2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.70 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="l2" value="3.00 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="l2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>3.00 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="m2" value="3.50 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="m2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>3.50 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightFolding" id="n2" value="4.00 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="n2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>4.00 m</span>
                      </label>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="getOfferButton" onClick={() => {inputCheck2 ? setDivs(4) : alert('Devam edebilmek için öncelikle seçim yapınız!')}}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                    <hr />
                    <button className="getOfferButton" onClick={info3}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                    <hr />
                    <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                  </div>
                </div>
              </div> : divs === 4 ?

                <div id='step4Folding'>
                  <div className='UserSettingAll'>
                    <div className='getoffer-text'>(4.Adım)<br /><hr />Montaj yapılacak balkon türünü seçiniz</div>
                    <div className="radiogroup">
                      <div className="wrapper">
                        <input className="state" type="radio" name="balconyInfo" id="a3" value="L Balkon (2 Cephe)" onChange={e => setInputCheck3(e.target.value)} />
                        <label className="label" htmlFor="a3">
                          <div className="indicator"></div>
                          <span className='textOfferCss'>L Balkon (2 Cephe)</span>
                        </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" name="balconyInfo" id="b3" value="Gömme Balkon (1 Cephe)" onChange={e => setInputCheck3(e.target.value)} />
                        <label className="label" htmlFor="b3">
                          <div className="indicator"></div>
                          <span className='textOfferCss'>Gömme Balkon (1 Cephe)</span>
                        </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" name="balconyInfo" id="c3" value="U Balkon(3 Cephe)" onChange={e => setInputCheck3(e.target.value)} />
                        <label className="label" htmlFor="c3">
                          <div className="indicator"></div>
                          <span className='textOfferCss'>U Balkon(3 Cephe)</span>
                        </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" name="balconyInfo" id="d3" value="Yay Balkon (Yuvarlak)" onChange={e => setInputCheck3(e.target.value)} />
                        <label className="label" htmlFor="d3">
                          <div className="indicator"></div>
                          <span className='textOfferCss'>Yay Balkon (Yuvarlak)</span>
                        </label>
                      </div>
                    </div>
                    <div className="buttons">
                      <button className="getOfferButton" onClick={() => {inputCheck3 ? setDivs(5) : alert('Devam edebilmek için öncelikle seçim yapınız!') }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                      <hr />
                      <button className="getOfferButton" onClick={info4}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                      <hr />
                      <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                    </div>
                  </div>
                </div> : divs === 5 ?

                  <div id='step5Folding'>
                    <div className='UserSettingAll'>
                      <div className='getoffer-text'>(5.Adım)<br /><hr />Montaj yapılacak cam rengini seçiniz</div>
                      <div className="radiogroup">
                        <div className="wrapper">
                          <input className="state" type="radio" name="windowInfoFolding" id="a4" value="Şeffaf Cam" onChange={e => setInputCheck4(e.target.value)} />
                          <label className="label" htmlFor="a4">
                            <div className="indicator"></div>
                            <span className='textOfferCss'>Şeffaf Cam</span>
                          </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" name="windowInfoFolding" id="b4" value="Füme Cam" onChange={e => setInputCheck4(e.target.value)} />
                          <label className="label" htmlFor="b4">
                            <div className="indicator"></div>
                            <span className='textOfferCss'>Füme Cam</span>
                          </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" name="windowInfoFolding" id="c4" value="Reflekte Cam" onChange={e => setInputCheck4(e.target.value)} />
                          <label className="label" htmlFor="c4">
                            <div className="indicator"></div>
                            <span className='textOfferCss'>Reflekte Cam</span>
                          </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" name="windowInfoFolding" id="d4" value="Buzlu Cam" onChange={e => setInputCheck4(e.target.value)} />
                          <label className="label" htmlFor="d4">
                            <div className="indicator"></div>
                            <span className='textOfferCss'>Buzlu Cam</span>
                          </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" name="windowInfoFolding" id="e4" value="Bronze Cam" onChange={e => setInputCheck4(e.target.value)} />
                          <label className="label" htmlFor="e4">
                            <div className="indicator"></div>
                            <span className='textOfferCss'>Bronze Cam</span>
                          </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" name="windowInfoFolding" id="f4" value="Karar vermedim / farketmez" onChange={e => setInputCheck4(e.target.value)} />
                          <label className="label" htmlFor="f4">
                            <div className="indicator"></div>
                            <span className='textOfferCss'>Karar vermedim / farketmez</span>
                          </label>
                        </div>
                      </div>
                      <div className="buttons">
                        <button className="getOfferButton" onClick={() => {inputCheck4 ? setDivs(6) : alert('Devam edebilmek için öncelikle seçim yapınız!')}}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                        <hr />
                        <button className="getOfferButton" onClick={info5}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                        <hr />
                        <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                      </div>
                    </div>
                  </div> : divs === 6 ?

                    <div id='step6Folding'>
                      <div className='UserSettingAll'>
                        <div className='getoffer-text'>(6.Adım)<br /><hr />Aklınıza gelen diğer detayları yazablirsiniz.</div>
                        <div className="radiogroup-ex">

                          <textarea onChange={e => setTextArea(e.target.value)} className="getOffer-input" type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)' />
                        </div>
                        <div className="buttons">
                          <button className="getOfferButton" onClick={() => {textArea ? setDivs(7) : alert('Lütfen açıklama yaparak firmalarımızı biraz bilgilendiriniz!')}}><i className="fa-solid fa-eye"></i> Teklifimi Göster</button>
                          <hr />
                          <button className="getOfferButton" onClick={() => { setDivs(5) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                        </div>
                      </div>
                    </div> : divs === 7 ?

                      <div id='step7Folding'>
                        <div className='UserSettingAll'>
                          <div className='getoffer-text'>Teklifinizi gözden geçiriniz.</div>
                          <div className="radiogroupPrev">

                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>Seçilen Ürün:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{inputCheck}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>Balkon Genişlik:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{inputCheck1}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>Balkon Yükseklik:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{inputCheck2}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>Balkon Şekli:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{inputCheck3}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>Cam Çeşidi:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{inputCheck4}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>Açıklama:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{textArea}</div>
                              </label>
                            </div>

                          </div>
                          <div className="buttons">
                            <button onClick={(e) => saveOffer(e)} className="getOfferButton"><i className="fa-solid fa-upload"></i> Teklif Yayınla</button>
                            <hr />
                            <button onClick={info6} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                            <hr />
                            <button className="getOfferButton" onClick={() => { setDivs(6) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Sayfa</button>
                            <hr />
                            <Link className="getOfferLinkButton" to='/getOffer/category'><i className="fa-solid fa-circle-xmark"></i> İptal / Ana Menü</Link>
                          </div>
                        </div>
                      </div> : null}
      </div>
    </div>
  )
}
export default GetOfferFoldingWindow;