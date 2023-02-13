import ContactData from './contact_files/contact_data'
import GoogleMaps from './contact_files/google_maps'
export default function Contact()
{


    return(
        <>
        <div className='placeholder'> </div>
        <div id="contact_head">
        <h1>Dane Kontaktowe</h1>
        <h2>Żeby złożyć zamówienie zadzwoń lub napisz do nas</h2>
        </div>
        <div className="contact_data">
            <div>
            <ContactData src='/images/icons/home.png' alt='ikona domu' text={ <>ul. Rogozińska 55<br /> 62-095 Murowana Goślina</>}/>
            <ContactData src='/images/icons/phone.png' alt='ikona telefonu' text='+48 577 579 484' link='tel: +48577579484'/>
            <ContactData src='/images/icons/mail.png' alt='ikona listu' text='biuro@rentmars.pl' link='mailto: biuro@rentmars.pl'/>
            <ContactData src='/images/icons/facebook.png' alt='ikona facebook' text="Znajdź nas na facebook'u" link='https://www.facebook.com/Rentmars-wypo%C5%BCyczalnia-sprz%C4%99tu-511132802639799'/>
            </div>
            <div>
        <GoogleMaps />
            </div>
        </div>
        </>

    )
}