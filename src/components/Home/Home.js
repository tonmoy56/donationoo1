import React from 'react';
import img1 from '../../images/katt-yukawa-K0E6E0a0R3A-unsplash (1).jpg'

import img2 from '../../photo/church-of-the-king-j9jZSqfH5YI-unsplash.jpg'
import img3 from '../../photo/gabriel-gurrola-2UuhMZEChdc-unsplash.jpg'
import img4 from '../../photo/larm-rmah-AEaTUnvneik-unsplash.jpg'
import img5 from '../../photo/shannon-richards-jx_kpR7cvDc-unsplash.jpg'
import img6 from '../../photo/shayna-douglas-e_lFHewfPVM-unsplash.jpg'
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';







const Home = () => {


  const images = [
    {
      img: img2,
      category:'child-education',
      donate:'$100'
    },

    {
      img: img3,
      category:'Music lession for people',
      donate:'$100'
    },


    {
      img: img4,
      category:'Food for all Child',
      donate:'$100'
    },

    {
      img: img5,
      category:'Animal care',
      donate:'$100'
    },

    // {
    //   img: img6,
    //   category:'Environment pollution',
    //   donate:'$100'
    // },
  ]
  return (

    <div>

      <div className="hero min-h-screen bg-base-200">


        <div className="hero-content flex-col lg:flex-row-reverse">

          <img src={img1} className="max-w-full  h-60 shadow-2xl" />


          <div>
            <h1 className="text-5xl font-bold">Donate for the People!</h1>
            <p className="py-6 text-3xl text-green-400">I have found that among its other <br />
              benefits, giving liberates the soul of the giver.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>












        </div>







      </div>


      <div className='flex'>

        {
          images.map(image=><Cards image={image}></Cards>)
        }

      </div>

      <Footer></Footer>


    </div>

  );
};

export default Home;