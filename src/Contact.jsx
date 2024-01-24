import Navbar from './components/Navbar'
import mohbad1 from './assets/images/Mohbad.jpg'
import mohbad2 from './assets/images/Mohbad10.jpeg'
import mohbad3 from './assets/images/Mohbad2.png'
import mohbad4 from './assets/images/Mohbad9.jpg'
const Contact = () => {
    const img1 = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  return (
    <>
        <div className="first">
        <Navbar title="This Mothersucker Don't Miss" subtitle="In out Fam"/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ipsum delectus ab, tenetur soluta unde eius odio et ut libero veritatis voluptates. Officiis, ipsam blanditiis ex ipsum explicabo ducimus animi vero molestias velit, iure, modi nemo. Facere molestias id quas, facilis eum sunt nam reiciendis quis totam deleniti, veniam voluptatem?</p>
        <img src={img1} alt="" />
        <div className="image2">
            <img src={mohbad1} alt="" />
            <img src={mohbad2} alt="" />
            <img src={mohbad3} alt="" />
            <img src={mohbad4} alt="" />
        </div>
        </div>
        </>
  )
}

export default Contact