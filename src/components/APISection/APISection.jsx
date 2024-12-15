import image from "../../assets/images/api-image.png";

const APISection = () => {
  return (
    <section className="api-info">
      <div className="content">
        <div className="api-content">
          <h2>Automate payouts with our API.</h2>
          <p>
            Large and enterprise-level businesses making high volumes of payouts
            can work with our team to create a solution to help them scale. The
            Wise API gives businesses access to the low fees, speedy transfers,
            and smart tech that powers Wise Business transfers.
          </p>
          <button>Contact sales</button>
        </div>
        <div className="api-image">
          <img src={image} />
        </div>
      </div>
    </section>
  );
};

export default APISection;
