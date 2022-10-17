import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="feature-card flex flex-row rounded-[20px] p-6">
    <div className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="h-1/2 w-1/2 object-contain" />
    </div>
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="mb-1 font-poppins text-[18px] font-semibold leading-[23px] text-white">{title}</h4>
      <p className="mb-1 font-poppins font-normal leading-[24px] text-dimWhite">{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="hidden sm:block" /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10"></Button>
      </div>
      <div className={`${layout.sectionImg} flex-col gap-6`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
