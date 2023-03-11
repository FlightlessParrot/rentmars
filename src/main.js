import { useRef, memo, useState, useEffect, createContext } from "react";
import MainImage from "./main_files/main_image";
import NonSymetric from "./main_files/non_symetric";
import ImageLinks from "./main_files/image_links";
import IconText from "./main_files/icons_text";
import Foot from "./warp_files/foot";
import { CSSTransition } from "react-transition-group";
import { useOutlet, useOutletContext } from "react-router-dom";

let firstShoot = false;

 export const Loader=createContext((l)=>{console.log(l)})
export default function Main() {
  const [intro, setIntro] = useState(false);

  const introElements = useRef(null);
  const context=useOutletContext();
  useEffect(() => {
    if (introElements.current) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.9,
      };
      const observer = new IntersectionObserver(() => {
        come();
        console.log("123");
      }, options);
      observer.observe(introElements.current);
      console.log(introElements.current);

      return () => {
        introElements.current && observer.unobserve(introElements.current);
      };
    }
  }, [introElements.observer]);

  function come() {
    if (firstShoot) setIntro(true);
    else firstShoot = true;

    console.log("I am comming");
  }

  return (
    <>
      <div id="main_tools">
        <div></div>
      </div>
      <div id="main">
        <div className="placeholder"></div>
        <MainImage />
        <NonSymetric>
          <Loader.Provider value={context}>
          <ImageLinks /></Loader.Provider>
        </NonSymetric>
        <div className="relative_text">
          <h1>O nas</h1>
          <p>
            Nasza wypożyczalnia powstała w 2019 roku i dynamicznie się rozwija.
            Oferujemy Państwu wynajem maszyn budowlanych i ogrodniczych. Nasza
            siedziba znajduje się w Murowanej Goślinie ul. Rogozińska 55 62-095.
            W 2022 roku rozpoczęliśmy sprzedaż agregatów Fogo oraz ciężkich
            maszyn budowlanych Bomag.
          </p>
          <p>
            W Naszej ofercie znajdą Państwo mnóstwo urządzeń, zarówno do
            drobnych przydomowych prac jak również ciężki sprzęt budowlany.
            Maszyny można wypożyczać na dobę lub dłuższy okres, cena jest
            uzależniona od okresu wynajmu. Urządzenia są na bieżąco serwisowane
            i przygotowane tak aby bezproblemowo wykonały prace im powierzone.
            Korzystając z Naszych usług oszczędzają Państwo czas i pieniądze,
            ponieważ wykonają Państwo wszystkie prace szybko i bez potrzeby
            kupowania maszyny która będzie użyta tylko kilka razy.
          </p>
        </div>
        <NonSymetric>
          <div id="icons_elements" ref={introElements}>
            <CSSTransition in={intro} timeout={200} classNames="arrive">
              <IconText link="/images/icons/ecology.png" text="Ekologia" />
            </CSSTransition>
            <CSSTransition in={intro} timeout={200} classNames="arrive">
              <IconText link="/images/icons/settings.png" text="Niezawodność" />
            </CSSTransition>
            <CSSTransition in={intro} timeout={200} classNames="arrive">
              <IconText
                link="/images/icons/dollar.png"
                text="Atrakcyjne ceny"
              />
            </CSSTransition>
            <CSSTransition in={intro} timeout={200} classNames="arrive">
              <IconText
                link="/images/icons/concrete-mixer.png"
                text="Bogata oferta"
              />
            </CSSTransition>
          </div>
        </NonSymetric>
        <div className="relative_text">
          <p>
            Rokrocznie liczba oferowanych maszyn i urządzeń zwiększa się, zatem
            polecamy śledzić Naszą stronę by być na bieżąco. Jeśli wśród
            oferowanego przez Nas sprzętu nie ma maszyny na którą jest
            zapotrzebowanie to zachęcamy do skontaktowania się z Nami, a być
            może wkrótce taka maszyna będzie dostępna. Staramy się na bieżąco
            sprostać oczekiwaniom Naszych klientów. Sprzedaż maszyn którą
            prowadzimy będzie na bieżąco rozwijana, a jeśli są Państwo
            zainteresowani zakupem agregatu lub zagęszczarki renomowanych firm
            to zaoferujemy konkurencyjną cenę wraz z pełnym serwisem.
          </p>
        </div>
        <footer>
          <div>
            <img loading="lazy" src="/images/loga/nameless_500.png" />{" "}
          </div>

          <Foot
            title={"Dane firmy"}
            text={[
              "Rentmars Marcin Zieleniewski",
              "NIP: 7773128154",
              "siedziba: ul. Rogozińska 55",
              "62-095 Murowana Goślina",
            ]}
          />
          <Foot
            title={"Kontakt"}
            text={[
              "tel: +48 577 579 484",
              "mail: biuro@rentmars.pl",
              "adres: ul. Rogozińska 55",
              "62-095 Murowana Goślina",
            ]}
          />
          <Foot
            title={"Nasza działalność"}
            text={["Sklep", "Wypożyczalnia", "I więcej"]}
          />
        </footer>
      </div>
    </>
  );
}
