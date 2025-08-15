import ServicesTwo from "../factoring/servicesTwo";
import BreadCrumb from "../../components/BreadCrumb";

export const PricesPage = () => {
  return (
    <main>
      <BreadCrumb
        pageName="Prices"
        title="Our Service Pricing"
        description="We are transparent and straightforward in our pricing model. No hidden fees, no additional expenses"
      />
      <ServicesTwo />
    </main>
  );
};
