import "./App.css";
import Card from "./components/Card";

function App({ img_link }) {
  return (
    <>
      <div className="card-container">
        <Card
          src="https://wallpapercave.com/wp/wp3376127.jpg"
          title="Pizza"
          desc="Full Cheesy"
          price="349"
        />
        <Card
          src="https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg"
          title="Burger"
          desc="Chirspy & Veg"
          price="99"
        />
        <Card
          src="https://img.freepik.com/premium-photo/chole-bhature-spicy-chick-peas-curry-also-known-as-chole-channa-masala-is-traditional-north-indian-main-course-recipe-usually-served-with-fried-puri-bhature-selective-focus_726363-296.jpg?w=2000"
          title="Chole Bhature"
          desc="Fingerlicious"
          price="149"
        />
        <Card
          src="https://vismaifood.com/storage/app/uploads/public/609/3dc/1d7/6093dc1d77053892307086.jpg"
          title="Dosa"
          desc="Buttery Dosa"
          price="199"
        />
      </div>
    </>
  );
}

export default App;
