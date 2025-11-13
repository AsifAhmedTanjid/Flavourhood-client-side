import { FaStar } from "react-icons/fa";

const Stars = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        color={i <= rating ? "#FFD700" : "#E0E0E0"} 
        size={16}
      />
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default Stars;
