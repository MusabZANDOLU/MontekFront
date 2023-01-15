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


const info1 = () => {
    alertify.alert('Seçilecek Ürünler Hakkında', 'Plise sineklik akordiyon yapıda ve katlanabilir olarak tasarlanmıştır. Sabit sineklik direkt monte eildiği yerde sabit olarak kalır, menteşeli sineklik açılıp kapanabilen sinekliktir. Sarhoş sineklik serbest yapıda olur sağa ya da sola katlanabilir.');
}

const info2 = () => {
    alertify.alert('Sineklik en ölçüsü seçimi', 'Sineklik en ölçüsü için metre yardımıyla açılan pencerenin ya da kapının dış tırnağından alınır. Sağ dış tırnaktan sol dış tırnağa kadar ölçünüzü alarak girebilirsiniz.');
}

const info3 = () => {
    alertify.alert('Sineklik boy ölçüsü seçimi', 'Sineklik boy ölçüsü için metre yardımıyla açılan pencerenin ya da kapının dış tırnağından alınır. Üst dış tırnaktan alt dış tırnağa kadar ölçünüzü alarak girebilirsiniz.');
}

const info4 = () => {
    alertify.alert('Ürün adedi hakkında', 'Teklif almak istediğiniz üründen kaç adet istediğinizi seçebilirsiniz. Aşağıda bulunmayan miktarları açıklama kısmında belirtebilirsiniz.');
}

const info5 = () => {
    alertify.alert('Sineklik kasa rengi hakkında', 'Sinekliğinizi pencere ya da kapı renginize göre seçebilirsiniz. Alüminyum malzemeden olan sineklikler için renkler pencereler ile aynıdır.');
}

const info6 = () => {
    alertify.alert('Teklif Kontrol', 'Teklifinizi aşağıdaki kutudan kontrol ediniz. Eğer istemediğiniz ya da yanlış olan seçim varsa o adıma geri gidip düzenleyebilirsiniz.');
}


const GetOfferSwatter = () => {

    const { accessToken, id, name, surName } = AuthLocalStorage()
    const [divs, setDivs] = useState(1);
    const [inputCheck, setInputCheck] = useState();
    const [inputCheck1, setInputCheck1] = useState();
    const [inputCheck2, setInputCheck2] = useState();
    const [inputCheck3, setInputCheck3] = useState();
    const [inputCheck4, setInputCheck4] = useState();
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
                productWindow: inputCheck4,
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
        <div>
            <div className='getOfferPvcContent'>
                <Navbar />
                <div className='get-tt'>

                    {divs === 1 ?

                        <div id='step1Swatter'>
                            <div className='UserSettingAll'>
                                <div className='getoffer-text'>(1.Adım)<br /><hr />Teklif vermek istediğiniz sineklik türünü seçiniz.</div>
                                <div className="radiogroup">
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="a" value="Sürgülü Sineklik" onChange={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="a">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Sürgülü Sineklik</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="b" value="Plise Sineklik" onChange={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="b">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Plise Sineklik</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="e" value="Menteşeli Sineklik" onChange={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="e">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Menteşeli Sineklik</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="f" value="Sabit Sineklik" onChange={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="f">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Sabit Sineklik</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="g" value="Sarhoş(Serbest) Sineklik" onChange={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="g">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Sarhoş(Serbest) Sineklik</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="m" value="Mıknatıslı Sineklik" onChange={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="m">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Mıknatıslı Sineklik</span>
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

                            <div id='step2Swatter' className='onlyMakeBlock'>
                                <div className='UserSettingAll'>
                                    <div className='getoffer-text'>(2.Adım)<br /><hr />Pencere / Kapı en ölçüsünü seçiniz.</div>

                                    <div className="radiogroup">
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="a1" value="40- cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="a1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>40- cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="b1" value="45 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="b1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>45 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="c1" value="50 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="c1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>50 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="d1" value="55 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="d1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>55 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="e1" value="60 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="e1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>60 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="f1" value="70 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="f1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>70 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="g1" value="80 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="g1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>80 cm</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="radiogroup">
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="h1" value="90 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="h1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>90 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="i1" value="100 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="i1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>100 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="j1" value="110 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="j1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>110 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="k1" value="120 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="k1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>120 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="l1" value="130 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="l1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>130 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="m1" value="140 cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="m1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>140 cm</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="n1" value="150+ cm" onChange={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="n1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>150+ cm</span>
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

                                <div id='step3Swatter'>
                                    <div className='UserSettingAll'>
                                        <div className='getoffer-text'>(3.Adım)<br /><hr />Pencere / Kapı boy ölçüsünü seçiniz.</div>
                                        <div className="radiogroup">
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="a2" value="50 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="a2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>50 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="b2" value="60 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="b2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>60 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="c2" value="70 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="c2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>70 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="d2" value="80 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="d2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>80 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="e2" value="90 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="e2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>90 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="f2" value="100 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="f2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>100 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="g2" value="110 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="g2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>110 cm</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="radiogroup">
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="h2" value="120 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="h2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>120 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="i2" value="135 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="i2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>135 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="j2" value="150 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="j2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>150 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="k2" value="165 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="k2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>165 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="l2" value="190 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="l2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>190 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="m2" value="200 cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="m2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>200 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="n2" value="220+ cm" onChange={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="n2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>220+ cm</span>
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

                                    <dia3 id='step4Swatter'>
                                        <div className='UserSettingAll'>
                                            <div className='getoffer-text'>(4.Adım)<br /><hr />Bu ölçüde kaç adet sineklik istediğinizi seçiniz.</div>
                                            <div className="radiogroup">
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="a3" value="1" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="a3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>1</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="b3" value="2" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="b3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>2</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="c3" value="3" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="c3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>3</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="d3" value="4" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="d3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>4</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="e3" value="5" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="e3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>5</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="radiogroup">
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="f3" value="6" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="f3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>6</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="g3" value="7" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="g3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>7</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="h3" value="8" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="h3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>8</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="i3" value="9" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="i3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>9</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="j3" value="10" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="j3">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>10</span>
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
                                    </dia3> : divs === 5 ?

                                        <div id='step5Swatter'>
                                            <div className='UserSettingAll'>
                                                <div className='getoffer-text'>(5.Adım)<br /><hr />Sineklik kasa rengini seçiniz.</div>
                                                <div className="radiogroup">
                                                    <div className="wrapper">
                                                        <input className="state" type="radio" name="windowInfo" id="a4" value="Beyaz" onChange={e => setInputCheck4(e.target.value)} />
                                                        <label className="label" htmlFor="a4">
                                                            <div className="indicator"></div>
                                                            <span className='textOfferCss'>Beyaz</span>
                                                        </label>
                                                    </div>
                                                    <div className="wrapper">
                                                        <input className="state" type="radio" name="windowInfo" id="b4" value="Bronze" onChange={e => setInputCheck4(e.target.value)} />
                                                        <label className="label" htmlFor="b4">
                                                            <div className="indicator"></div>
                                                            <span className='textOfferCss'>Bronze</span>
                                                        </label>
                                                    </div>
                                                    <div className="wrapper">
                                                        <input className="state" type="radio" name="windowInfo" id="c4" value="Antrasit Gri" onChange={e => setInputCheck4(e.target.value)} />
                                                        <label className="label" htmlFor="c4">
                                                            <div className="indicator"></div>
                                                            <span className='textOfferCss'>Antrasit Gri</span>
                                                        </label>
                                                    </div>
                                                    <div className="wrapper">
                                                        <input className="state" type="radio" name="windowInfo" id="d4" value="Altın Meşe (Açık Kahverengi)" onChange={e => setInputCheck4(e.target.value)} />
                                                        <label className="label" htmlFor="d4">
                                                            <div className="indicator"></div>
                                                            <span className='textOfferCss'>Altın Meşe (Açık Kahverengi)</span>
                                                        </label>
                                                    </div>
                                                    <div className="wrapper">
                                                        <input className="state" type="radio" name="windowInfo" id="e4" value="Budaklı Meşe (Kahverengi" onChange={e => setInputCheck4(e.target.value)} />
                                                        <label className="label" htmlFor="e4">
                                                            <div className="indicator"></div>
                                                            <span className='textOfferCss'>Budaklı Meşe (Kahverengi)</span>
                                                        </label>
                                                    </div>
                                                    <div className="wrapper">
                                                        <input className="state" type="radio" name="windowInfo" id="f4" value="Brown (Koyu Kahverengi)" onChange={e => setInputCheck4(e.target.value)} />
                                                        <label className="label" htmlFor="f4">
                                                            <div className="indicator"></div>
                                                            <span className='textOfferCss'>Brown (Koyu Kahverengi)</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="buttons">
                                                    <button className="getOfferButton" onClick={() => { setDivs(6) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                                    <hr />
                                                    <button className="getOfferButton" onClick={info5}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                                    <hr />
                                                    <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                                </div>
                                            </div>
                                        </div> : divs === 6 ?

                                            <div id='step6Swatter'>
                                                <div className='UserSettingAll'>
                                                    <div className='getoffer-text'>(6.Adım)<br /><hr />Aklınıza gelen diğer detayları yazabilirsiniz.</div>
                                                    <div className="radiogroup-ex">

                                                        <textarea value={textArea ? textArea : ''} className="getOffer-input" onChange={e => setTextArea(e.target.value)} type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)' />
                                                    </div>
                                                    <div className="buttons">
                                                        <button className="getOfferButton" onClick={() => { textArea ? setDivs(7) : alert('Lütfen açıklama yaparak firmalarımızı biraz bilgilendiriniz!') }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                                        <hr />
                                                        <button className="getOfferButton" onClick={() => { setDivs(5) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                                    </div>
                                                </div>
                                            </div> : divs === 7 ?

                                                <div id='step8Folding' className="citiesPageAll">
                                                    <div className="selectCover">
                                                        <div className='comboboxCities'>
                                                            <div className='cityCover'>
                                                                <div className="citiesPageTitleUp">Montaj Yaptırmak İstediğiniz İl</div>
                                                                <select
                                                                    className="selectClass"
                                                                    onChange={e => setSelectedCity(e.target.value)}
                                                                >
                                                                    <option defaultValue={true} value="0">
                                                                        İl seçiniz
                                                                    </option>
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
                                                                    {selectedCity ? (<option defaultValue={true} value="0">
                                                                        İlçe seçiniz
                                                                    </option>) : null}
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
                                                </div> : divs === 8 ?


                                                    <div id='step7Swatter'>
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
                                                                        <div className='textPrev'>Sineklik Genişliği:</div>
                                                                        <i className="fa-solid fa-check tik"></i>
                                                                        <div className='textOfferCssOut'>{inputCheck1}</div>
                                                                    </label>
                                                                </div>
                                                                <hr />
                                                                <div className="wrapper">
                                                                    <label className="label">
                                                                        <div className='textPrev'>Sineklik Yüksekliği:</div>
                                                                        <i className="fa-solid fa-check tik"></i>
                                                                        <div className='textOfferCssOut'>{inputCheck2}</div>
                                                                    </label>
                                                                </div>
                                                                <hr />
                                                                <div className="wrapper">
                                                                    <label className="label">
                                                                        <div className='textPrev'>Ürün Adedi:</div>
                                                                        <i className="fa-solid fa-check tik"></i>
                                                                        <div className='textOfferCssOut'>{inputCheck3}</div>
                                                                    </label>
                                                                </div>
                                                                <hr />
                                                                <div className="wrapper">
                                                                    <label className="label">
                                                                        <div className='textPrev'>Ürün Kasa Rengi:</div>
                                                                        <i className="fa-solid fa-check tik"></i>
                                                                        <div className='textOfferCssOut'>{inputCheck4}</div>
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
                                                                <button className="getOfferButton" onClick={() => { setDivs(7) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Sayfa</button>
                                                                <hr />
                                                                <Link className="getOfferLinkButton" to='/getOffer/category'><i className="fa-solid fa-circle-xmark"></i> İptal / Ana Menü</Link>
                                                            </div>
                                                        </div>
                                                    </div> : null}

                </div>
            </div>
        </div >
    )
}

export default GetOfferSwatter;