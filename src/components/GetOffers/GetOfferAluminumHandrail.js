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
    alertify.alert('Seçilecek Ürünler Hakkında', 'Ölçülerinizi balkonun eni ve yüksekliği olacak şekilde alınız. Verilen teklifler yalnızca yaklaşık sonuçları verebilir. Kesin bilgi içermemektedir!');
}

function info2() {
    alertify.alert('Balkon En Ölçüsü Hakkında', 'Balkonunuzun bir ucundan diğerine olacak şekilde metre yardımıyla ölçünüz. L ya da U şeklindeki balkonlar için tek balkon gibi düşünüp ölçünüzü alabilirsiniz.');
}

function info3() {
    alertify.alert('Balkon Yükseklik Ölçüsü Hakkında', 'Balkonunuzun zeminde mermerden tavana ölçüsünü alarak yazabilirsiniz. Daha doğru sonuçlar için balkonun enine baş orta ve sondan yükseklik ölçğsü alabilirsiniz.');
}

function info4() {
    alertify.alert('Balkon Türü Hakkında', 'Balkonunuzun şekil olarak yanları duvar ise gömme, tek tarafı duvar ise L, iki tarafıda dışa doğru ise U şeklinde olabilir.');
}

function info5() {
    alertify.alert('Ürün Cam Rengi Hakkında', 'Şeffaf: renksiz, Füme: Koyu Renkte: Reflekte: Aynalı yapıda, Buzlu: Buzlu, Bronze: Koyu Altın Sarısı...');
}

function info6() {
    alertify.alert('Teklif Kontrol', 'Teklifinizi aşağıdaki kutudan kontrol ediniz. Eğer istemediğiniz ya da yanlış olan seçim varsa o adıma geri gidip düzenleyebilirsiniz.');
}
const GetOfferAluminumHandrail = () => {

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
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='denemeClip'>
            <div className='getOfferPvcContent'>
                <Navbar />

                <div className='get-tt'>
                    {divs === 1 ?

                        <div id='step1AluminumHandrail'>
                            <div className='UserSettingAll'>
                                <div className='getoffer-text'>(1.Adım)<br /><hr />Teklif vermek istediğiniz alüminyum küpeşte için mekan seçiniz.</div>
                                <div className="radiogroup">
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="a" value="Balkon" onClick={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="a">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Balkon</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="b" value="Merdiven" onClick={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="b">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Merdiven</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="e" value="Pencere Önü" onClick={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="e">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Pencere Önü</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="swatterName" id="f" value="Teras" onClick={e => setInputCheck(e.target.value)} />
                                        <label className="label" htmlFor="f">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>Teras</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="getOfferButton" onClick={() => { inputCheck ? setDivs(2) : alert("Önce seçim yapınız.") }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                    <hr />
                                    <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                    <hr />
                                    <Link className="getOfferLinkButton" to='/getOffer/category'><i className="fa-solid fa-house"></i> Kategorilere Dön</Link>
                                </div>
                            </div>
                        </div> : divs === 2 ?

                            <div id='step2AluminumHandrail'>
                                <div className='UserSettingAll'>
                                    <div className='getoffer-text'>(2.Adım)<br /><hr />Montaj yapılacak yerin uzunluğunu seçiniz.</div>
                                    <div className="radiogroup">
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="a1" value="2 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="a1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>2 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="b1" value="3 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="b1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>3 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="c1" value="4 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="c1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>4 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="d1" value="5 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="d1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>5 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="e1" value="6 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="e1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>6 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="f1" value="8 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="f1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>8 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="g1" value="10 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="g1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>10 m</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="radiogroup">
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="h1" value="12 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="h1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>12 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="i1" value="15 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="i1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>15 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="j1" value="17 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="j1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>17 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="k1" value="20 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="k1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>20 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="l1" value="25 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="l1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>25 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="m1" value="30 m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="m1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>30 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeWidth" id="n1" value="40+ m" onClick={e => setInputCheck1(e.target.value)} />
                                            <label className="label" htmlFor="n1">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>40+ m</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button className="getOfferButton" onClick={() => { inputCheck1 ? setDivs(3) : alert("Sonraki adım için lütfen önce seçim yapınız.") }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                        <hr />
                                        <button className="getOfferButton" onClick={info2}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                        <hr />
                                        <button className="getOfferButton" onClick={() => { setDivs(1) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                    </div>
                                </div>
                            </div> : divs === 3 ?

                                <div id='step3AluminumHandrail'>
                                    <div className='UserSettingAll'>
                                        <div className='getoffer-text'>(3.Adım)<br /><hr />Küpeştenin yüksekliği için seçim yapınız.</div>
                                        <div className="radiogroup">
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="a2" value="30 cm" onClick={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="a2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>30 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="b2" value="35 cm" onClick={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="b2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>35 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="c2" value="40 cm" onClick={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="c2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>40 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="d2" value="45 cm" onClick={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="d2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>45 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="e2" value="50 cm" onClick={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="e2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>50 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="f2" value="55 cm" onClick={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="f2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>55 cm</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="sizeHeight" id="g2" value="60+ cm" onClick={e => setInputCheck2(e.target.value)} />
                                                <label className="label" htmlFor="g2">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>60+ cm</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="buttons">
                                            <button className="getOfferButton" onClick={() => { inputCheck2 ? setDivs(4) : alert("Sonraki adım için lütfen önce seçim yapınız.") }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                            <hr />
                                            <button className="getOfferButton" onClick={info3}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                            <hr />
                                            <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                        </div>
                                    </div>
                                </div> : divs === 4 ?

                                    <div id='step4AluminumHandrail'>
                                        <div className='UserSettingAll'>
                                            <div className='getoffer-text'>(4.Adım)<br /><hr />Küpeşte için gövde seçimi yapınız.</div>
                                            <div className="radiogroup">
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="h2" value="2 adet alüminyum çubuklu gövde" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="h2">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>2 adet alüminyum çubuklu gövde</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="i2" value="3 adet alüminyum çubuklu gövde" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="i2">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>3 adet alüminyum çubuklu gövde</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="j2" value="Temperli şeffaf camlı gövde" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="j2">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Temperli şeffaf camlı gövde</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="k2" value="Temperli buzlu camlı gövde" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="k2">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Temperli buzlu camlı gövde</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="l2" value="Temperli füme camlı gövde" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="l2">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Temperli füme camlı gövde</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="swatterPiece" id="m2" value="Temperli reflekte camlı gövde" onChange={e => setInputCheck3(e.target.value)} />
                                                    <label className="label" htmlFor="m2">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Temperli reflekte camlı gövde</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <button className="getOfferButton" onClick={() => { inputCheck ? setDivs(5) : alert("Sonraki adım için lütfen önce seçim yapınız.") }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                                <hr />
                                                <button className="getOfferButton" onClick={info4}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                                <hr />
                                                <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                            </div>
                                        </div>
                                    </div> : divs === 5 ?

                                        <div id='step5AluminumHandrail'>
                                            <div className='UserSettingAll'>
                                                <div className='getoffer-text'>(5.Adım)<br /><hr />Küpeşte rengi için seçim yapınız.</div>
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
                                                        <input className="state" type="radio" name="windowInfo" id="e4" value="Budaklı Meşe (Kahverengi)" onChange={e => setInputCheck4(e.target.value)} />
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
                                                    <button className="getOfferButton" onClick={() => { inputCheck ? setDivs(6) : alert("Sonraki adım için lütfen önce seçim yapınız.") }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                                    <hr />
                                                    <button className="getOfferButton" onClick={info5}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                                    <hr />
                                                    <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                                </div>
                                            </div>
                                        </div> : divs === 6 ?

                                            <div id='step6AluminumHandrail'>
                                                <div className='UserSettingAll'>
                                                    <div className='getoffer-text'>(6.Adım)<br /><hr />Aklınıza gelen diğer detayları yazabilirsiniz.</div>
                                                    <div className="radiogroup-ex">

                                                        <textarea value={textArea ? textArea : null} className="getOffer-input" onChange={e => setTextArea(e.target.value)} type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)' />
                                                    </div>
                                                    <div className="buttons">

                                                    <button className="getOfferButton" onClick={() => { inputCheck ? setDivs(7) : alert("Sonraki adım için lütfen önce seçim yapınız.") }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
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
                                                </div> : divs === 8 ?

                                                    <div id='step7AluminumHandrail'>
                                                        <div className='UserSettingAll'>
                                                            <div className='getoffer-text'>Teklifinizi gözden geçiriniz.</div>
                                                            <div className="radiogroupPrev">

                                                                <div className="wrapper">
                                                                    <label className="label">
                                                                        <div className='textPrev'>Montaj Yeri:</div>
                                                                        <i className="fa-solid fa-check tik"></i>
                                                                        <div className='textOfferCssOut'>{inputCheck}</div>
                                                                    </label>
                                                                </div>
                                                                <hr />
                                                                <div className="wrapper">
                                                                    <label className="label">
                                                                        <div className='textPrev'>Montaj Yeri Genişliği:</div>
                                                                        <i className="fa-solid fa-check tik"></i>
                                                                        <div className='textOfferCssOut'>{inputCheck1}</div>
                                                                    </label>
                                                                </div>
                                                                <hr />
                                                                <div className="wrapper">
                                                                    <label className="label">
                                                                        <div className='textPrev'>Montaj Yeri Yüksekliği:</div>
                                                                        <i className="fa-solid fa-check tik"></i>
                                                                        <div className='textOfferCssOut'>{inputCheck2}</div>
                                                                    </label>
                                                                </div>
                                                                <hr />
                                                                <div className="wrapper">
                                                                    <label className="label">
                                                                        <div className='textPrev'>Ürün Gövde Seçimi:</div>
                                                                        <i className="fa-solid fa-check tik"></i>
                                                                        <div className='textOfferCssOut'>{inputCheck3}</div>
                                                                    </label>
                                                                </div>
                                                                <hr />
                                                                <div className="wrapper">
                                                                    <label className="label">
                                                                        <div className='textPrev'>Kasa Rengi Seçimi:</div>
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
        </div>
    )
}

export default GetOfferAluminumHandrail;