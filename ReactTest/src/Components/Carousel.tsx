const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide container-lg pb-4"
      style={{paddingTop:'80px'}}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner d-flex">
        <div className="carousel-item active d-flex" style={{ maxHeight: "300px"}}>
          <img
            src="/images/discount_banner.jpeg"
            className="d-block w-100 h-100 object-fit-contain object-fit-lg-fill"
            alt="discountBanner"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
