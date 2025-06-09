import React from "react";
import "../css/dashboard/style.css";
import "../css/dashboard/css.css";

const Dashboard = () => {
  return (
    <div className="wrapper">
      {/* Top Nav */}
      <div className="top_nav">
        <div className="left">
          <div className="logo">
            <img src="/logo.jpg" alt="Logo" />
          </div>
        </div>
        <div className="right">
          <ul>
            <li><a href="/search"><img src="/images/5.jpg" alt="Search" /></a></li>
            <li><a href="/orders"><img src="/images/6.svg" alt="Orders" /></a></li>
            <li><a href="/cart"><img src="/images/7.png" alt="Cart" /></a></li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <section className="top-container">
        {/* Sidebar */}
        <div className="sidebar">
          <a href="/dashboard"><span>Dashboard</span></a>
          <a href="/search"><span>Search</span></a>
          <a href="/orders"><span>Your Orders</span></a>
        </div>

        {/* Showcase */}
        <div className="showcase">
          <p>We have introduced</p>
          <h1>"Global Advantage Opportunity"</h1>
          <p>
            You may consider buying all the certified diamonds (0.18 to 0.96 up)
            in volume to avail the advantages accordingly.
          </p>
          <a href="#" className="btn">Read More</a>
        </div>

        {/* Contact Info */}
        <div className="top-box top-box-a">
          <h3>Mr. Yatish Shah</h3>
          <p>+32 489 036 639</p>
          <p>+32 475 630 863</p>
          <h3>Mr. Mitesh Shah</h3>
          <p>+32 483 330 257</p>
          <p>+32 484 223 310</p>
          <a href="mailto:ishanpshah001@gmail.com" className="btn">Contact Now</a>
        </div>
      </section>

      {/* Boxes (Optional Feature Cards) */}
      <section className="boxes">
        <div className="box">
          <img src="/images/1.svg" alt="" />
          <h3>0</h3>
          <h2>New Goods</h2>
        </div>
        <div className="box">
          <img src="/images/2.svg" alt="" />
          <h3>0</h3>
          <h2>Reminder</h2>
        </div>
        <div className="box">
          <img src="/images/3.svg" alt="" />
          <h3>0</h3>
          <h2>Enquiry</h2>
        </div>
        <div className="box">
          <img src="/images/4.svg" alt="" />
          <h3>4</h3>
          <h2>Recommended</h2>
        </div>
      </section>

      {/* Slider Section */}
      <section className="galleryContainer">
        <center><h2>Recommended</h2></center>
        <div className="slideShowContainer">
          {/* Arrows and caption holder (static for now) */}
          <div className="nextPrevBtn leftArrow" onClick={() => {}}><span className="arrow arrowLeft"></span></div>
          <div className="nextPrevBtn rightArrow" onClick={() => {}}><span className="arrow arrowRight"></span></div>
          <div className="captionTextHolder">
            <p className="captionText slideTextFromTop">Caption Text</p>
          </div>

          {/* Slides */}
          <div className="imageHolder">
            <img src="/images/1.jpg" alt="Slide 1" />
            <p className="captionText">Caption Text-01</p>
          </div>
          <div className="imageHolder">
            <img src="/images/2.jpg" alt="Slide 2" />
            <p className="captionText">Caption Text-02</p>
          </div>
          <div className="imageHolder">
            <img src="/images/3.png" alt="Slide 3" />
            <p className="captionText">Caption Text-03</p>
          </div>
          <div className="imageHolder">
            <img src="/images/4.jpg" alt="Slide 4" />
            <p className="captionText">Caption Text-04</p>
          </div>
        </div>
        <div id="dotsContainer"></div>
      </section>

      {/* Footer */}
      <footer>
        <p>Super Stone &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Dashboard;

// import React from "react";
// import "../css/style.css";
// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       {/* Top Nav */}
//       <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
//         <div className="flex items-center space-x-4">
//           <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
//           <h1 className="text-xl font-semibold">Super Stone</h1>
//         </div>
//         <nav className="flex space-x-4">
//           <a href="/search"><img src="/images/5.jpg" alt="Search" className="h-8" /></a>
//           <a href="/orders"><img src="/images/6.svg" alt="Orders" className="h-8" /></a>
//           <a href="/cart"><img src="/images/7.png" alt="Cart" className="h-8" /></a>
//         </nav>
//       </header>

//       {/* Main Section */}
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-60 bg-white shadow-md min-h-screen p-4 space-y-4">
//           {['Dashboard', 'Search', 'Recommend', 'Cart', 'Your Orders', 'Upcoming'].map((item, idx) => (
//             <a
//               key={idx}
//               href={`/${item.toLowerCase().replace(/ /g, '')}`}
//               className="block py-2 px-4 rounded hover:bg-blue-100 text-gray-700"
//             >
//               {item}
//             </a>
//           ))}
//         </aside>

//         <main className="flex-1 p-6 space-y-8">
//           {/* Showcase */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <p className="text-sm text-gray-600">We have introduced</p>
//             <h1 className="text-2xl font-bold text-blue-600">"Global Advantage Opportunity"</h1>
//             <p className="text-gray-700 mt-2">
//               You may consider buying all the certified diamonds (0.18 to 0.96 up)
//               in volume to avail the advantages accordingly.
//             </p>
//             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//               Read More
//             </button>
//           </div>

//           {/* Contact Info */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
//             <div className="mt-2 space-y-1 text-gray-700">
//               <p>Mr. Yatish Shah: +32 489 036 639 / +32 475 630 863</p>
//               <p>Mr. Mitesh Shah: +32 483 330 257 / +32 484 223 310</p>
//               <a href="mailto:ishanpshah001@gmail.com" className="text-blue-600 underline">
//                 Email: ishanpshah001@gmail.com
//               </a>
//             </div>
//           </div>

//           {/* Boxes */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { img: "/images/1.svg", title: "New Goods", count: 0 },
//               { img: "/images/2.svg", title: "Reminder", count: 0 },
//               { img: "/images/3.svg", title: "Enquiry", count: 0 },
//               { img: "/images/4.svg", title: "Recommended", count: 4 },
//             ].map((box, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
//               >
//                 <img src={box.img} alt={box.title} className="h-12 mb-2" />
//                 <h3 className="text-2xl font-bold text-blue-600">{box.count}</h3>
//                 <p className="text-gray-700">{box.title}</p>
//               </div>
//             ))}
//           </div>

//           {/* Image Slider (Static) */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4 text-center">Recommended</h2>
//             <div className="flex overflow-x-auto space-x-4">
//               {[1, 2, 3, 4].map((num) => (
//                 <div key={num} className="min-w-[250px]">
//                   <img
//                     src={`/images/${num}.jpg`}
//                     alt={`Slide ${num}`}
//                     className="rounded-lg shadow-md"
//                   />
//                   <p className="text-center mt-2 text-gray-600">Caption Text-{num.toString().padStart(2, '0')}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white text-center p-4 mt-8 shadow-inner">
//         <p className="text-gray-600">Super Stone &copy; {new Date().getFullYear()}</p>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;
