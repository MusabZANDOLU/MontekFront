import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../base';
import { useNavigate } from 'react-router';
import Navbar from '../Dashboard/Navbar';
import alertify from 'alertifyjs';
import axios from 'axios';
import AuthLocalStorage from '../localStorage';
import '../../assets/scss/getOffer.scss';
import 'alertifyjs/build/css/alertify.min.css';

function info1() {
  alertify.alert('Ürünler Hakkında', 'Montaj yaptırmak istediğiniz ürün türünü seçiniz. Ürünler alüminyumdur.');
}

function info2() {
  alertify.alert('Genişlik Ölçüsü Hakkında', 'Montaj yerinin yanlarından metre yardımıyla alabileceğiniz ölçümdür. En sağlıklı ölçümler için alt, orta ve üst olarak farklı yerlerden en ölçümü alıp ortalamasını seçerek daha yakın teklifler alabilirsiniz.');
}

function info3() {
  alertify.alert('Balkon Yükseklik Ölçüsü Hakkında', 'Montaj yerinin üstünden altına metre yardımıyla alabileceğiniz ölçümdür. En sağlıklı ölçümler için sol, orta ve sağ olarak farklı yerlerden boy ölçümü alıp ortalamasını seçerek daha yakın teklifler alabilirsiniz.');
}

function info4() {
  alertify.alert('Balkon Yükseklik Ölçüsü Hakkında', 'Montaj yerinin üstünden altına metre yardımıyla alabileceğiniz ölçümdür. En sağlıklı ölçümler için sol, orta ve sağ olarak farklı yerlerden boy ölçümü alıp ortalamasını seçerek daha yakın teklifler alabilirsiniz.');
}

function info6() {
  alertify.alert('Teklif Kontrol', 'Teklifinizi aşağıdaki kutudan kontrol ediniz. Eğer istemediğiniz ya da yanlış olan seçim varsa o adıma geri gidip düzenleyebilirsiniz.');
}

const GetOfferShopping = () => {

  const { accessToken, id, name, surName } = AuthLocalStorage()
  const [divs, setDivs] = useState(1);
  const [inputCheck, setInputCheck] = useState();
  const [inputCheck1, setInputCheck1] = useState();
  const [inputCheck2, setInputCheck2] = useState();
  const [inputCheck3, setInputCheck3] = useState();
  const [textArea, setTextArea] = useState();
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCityCounties, setSelectedCityCounties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCitiesInfo();
  }, []);

  const getCitiesInfo = async () => {
    const response = await axios.get(`${BASE_URL}/getOffer/getCities`);
    setCities(response.data);
  };

  const saveOffer = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/Offers`, {
        productName: inputCheck,
        productWidth: inputCheck1,
        productHeight: inputCheck2,
        productPlace: inputCheck3,
        userComment: textArea,
        userId: id,
        userName: name,
        userSurName: surName,
        city: selectedCity,
        town: selectedCityCounties,
      }, { headers: { Authorization: `Bearer ${accessToken}` } })
      navigate("/myOffers")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='getOfferShoppingAll'>
      <Navbar />

      <div className='get-tt'>
        {divs === 1 ?

          <div id='step1Shop'>
            <div className='UserSettingAll'>
              <div className='getoffer-text'>(1.Adım)<br /><hr />Teklif vermek istediğiniz ürünü seçiniz</div>
              <div className="radiogroup">
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameShop" id="a" value="Otomatik Kapı" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="a">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Otomatik Kapı</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameShop" id="b" value="Otomatik Kepenk" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="b">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Otomatik Kepenk</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameShop" id="c" value="Alüminyum Cam" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="c">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Alüminyum Cam</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="productNameShop" id="d" value="Alüminyum Kapı" onChange={e => setInputCheck(e.target.value)} />
                  <label className="label" htmlFor="d">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Alüminyum Kapı</span>
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

            <div id='step2Shop'>
              <div className='UserSettingAll'>
                <div className='getoffer-text'>(2.Adım)<br /><hr />Montaj yapılacak yerin genişlik ölçüsünü metre cinsinden seçiniz.</div>
                <div className="radiogroup">
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="a1" value="2 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="a1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>2 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="b1" value="3 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="b1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>3 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="c1" value="4 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="c1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>4 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="d1" value="5 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="d1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>5 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="e1" value="6 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="e1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>6 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="f1" value="8 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="f1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>8 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="g1" value="10 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="g1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>10 m</span>
                    </label>
                  </div>
                </div>

                <div className="radiogroup">
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="h1" value="12 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="h1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>12 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="i1" value="15 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="i1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>15 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="j1" value="18 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="j1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>18 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="k1" value="20 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="k1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>20 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="l1" value="25 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="l1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>25 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="m1" value="30 m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="m1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>30 m</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="sizeWidthShop" id="n1" value="35+ m" onChange={e => setInputCheck1(e.target.value)} />
                    <label className="label" htmlFor="n1">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>35+ m</span>
                    </label>
                  </div>
                </div>
                <div className="buttons">
                  <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                  <hr />
                  <button className="getOfferButton" onClick={info2}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                  <hr />
                  <button className="getOfferButton" onClick={() => { setDivs(1) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                </div>
              </div>
            </div> : divs === 3 ?

              <div id='step3Shop'>
                <div className='UserSettingAll'>
                  <div className='getoffer-text'>(3.Adım)<br /><hr />Montaj yapılacak yerin yükseklik ölçüsünü metre cinsinden seçiniz.</div>
                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="a2" value="1.00 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="a2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.00 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="b2" value="1.30 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="b2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.30 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="c2" value="1.50 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="c2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.50 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="d2" value="1.70 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="d2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.70 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="e2" value="1.80 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="e2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.80 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="f2" value="1.90 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="f2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>1.90 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="g2" value="2.00 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="g2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.00 m</span>
                      </label>
                    </div>
                  </div>

                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="h2" value="2.10 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="h2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.10 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="i2" value="2.20 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="i2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.20 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="j2" value="2.50 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="j2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.50 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="k2" value="2.70 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="k2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>2.70 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="l2" value="3.00 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="l2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>3.00 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="m2" value="3.50 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="m2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>3.50 m</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="sizeHeightShop" id="n2" value="4.00 m" onChange={e => setInputCheck2(e.target.value)} />
                      <label className="label" htmlFor="n2">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>4.00 m</span>
                      </label>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                    <hr />
                    <button className="getOfferButton" onClick={info3}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                    <hr />
                    <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                  </div>
                </div>
              </div> : divs === 4 ?

                <div id='step4Shop'>
                  <div className='UserSettingAll'>
                    <div className='getoffer-text'>(4.Adım)<br /><hr />İstediğiniz ürün için kasa rengini seçiniz</div>
                    <div className="radiogroup">
                      <div className="wrapper">
                        <input className="state" type="radio" name="productNameShop" id="a3" value="Gri" onChange={e => setInputCheck3(e.target.value)} />
                        <label className="label" htmlFor="a3">
                          <div className="indicator"></div>
                          <span className='textOfferCss'>Gri</span>
                        </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" name="productNameShop" id="b3" value="Antrasit Gri" onChange={e => setInputCheck3(e.target.value)} />
                        <label className="label" htmlFor="b3">
                          <div className="indicator"></div>
                          <span className='textOfferCss'>Antrasit Gri</span>
                        </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" name="productNameShop" id="c3" value="Bronze" onChange={e => setInputCheck3(e.target.value)} />
                        <label className="label" htmlFor="c3">
                          <div className="indicator"></div>
                          <span className='textOfferCss'>Bronze</span>
                        </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" name="productNameShop" id="d3" value="Brown" onChange={e => setInputCheck3(e.target.value)} />
                        <label className="label" htmlFor="d3">
                          <div className="indicator"></div>
                          <span className='textOfferCss'>Brown</span>
                        </label>
                      </div>
                    </div>
                    <div className="buttons">
                      <button className="getOfferButton" onClick={() => { setDivs(5) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                      <hr />
                      <button className="getOfferButton" onClick={info4}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                      <hr />
                      <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                    </div>
                  </div>
                </div> : divs === 5 ?

                  <div id='step5Shop'>
                    <div className='UserSettingAll'>
                      <div className='getoffer-text'>(5.Adım)<br /><hr />Aklınıza gelen diğer detayları yazabilirsiniz.</div>
                      <div className="radiogroup-ex">

                        <textarea className="getOffer-input" onChange={e => setTextArea(e.target.value)} type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)' />
                      </div>
                      <div className="buttons">
                        <button className="getOfferButton" onClick={() => { inputCheck ? setDivs(6) : alert("Sonraki adım için lütfen önce seçim yapınız.") }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                        <hr />
                        <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                      </div>
                    </div>
                  </div> : divs === 6 ?

                    <div id='step8Folding' className="citiesPageAll">
                      <div className="selectCover">
                        <div className='comboboxCities'>
                          <div className='cityCover'>
                            <div className="citiesPageTitleUp">Montaj Yaptırmak İstediğiniz İl</div>
                            <select
                              className="selectClass"
                              onChange={e => setSelectedCity(e.target.value)}
                            >
                              {cities.map(allcities => (
                                <option
                                  key={allcities.id}
                                  value={allcities.name}
                                >
                                  {allcities.name.toLocaleUpperCase()}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className='cityCover'>
                            <div className="citiesPageTitleDown">
                              Montaj Yaptırmak İstediğiniz İlçe
                            </div>
                            <select
                              className="selectClass"
                              disabled={!selectedCity}
                              onChange={e => setSelectedCityCounties(e.target.value)}
                            >
                              {selectedCity && cities.find((c) => c.name === selectedCity).counties.map((country) =>
                                <option
                                  key={country}
                                  value={country}
                                >
                                  {country.toLocaleUpperCase()}
                                </option>
                              )}
                            </select>
                          </div>
                        </div>
                        <div className='citiesButtons'>
                          <div className="buttons">
                            <button className="getOfferButton" onClick={() => { setDivs(8) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                            <hr />
                            <button className="getOfferButton" onClick={() => { setDivs(6) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                          </div>
                        </div>
                      </div>
                    </div> : divs === 7 ?

                      <div id='step6Shop'>
                        <div className='UserSettingAll'>
                          <div className='getoffer-text'>Teklifinizi gözden geçiriniz. Değiştirmek istediğiniz detaylar için geri gidip seçim yapabilirsiniz.</div>
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
                                <div className='textPrev'>Montaj yeri genişliği:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{inputCheck1}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>Montaj yeri yükseklik:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{inputCheck2}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>Montaj yeri yükseklik:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{inputCheck3}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>İliniz:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{selectedCity}</div>
                              </label>
                            </div>
                            <hr />
                            <div className="wrapper">
                              <label className="label">
                                <div className='textPrev'>İlçeniz:</div>
                                <i className="fa-solid fa-check tik"></i>
                                <div className='textOfferCssOut'>{selectedCityCounties}</div>
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
                            <button className="getOfferButton" onClick={() => { setDivs(5) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Sayfa</button>
                            <hr />
                            <Link className="getOfferLinkButton" to='/getOffer/category'><i className="fa-solid fa-circle-xmark"></i> İptal / Ana Menü</Link>
                          </div>
                        </div>
                      </div> : null}
      </div>
    </div>
  )
}
export default GetOfferShopping;