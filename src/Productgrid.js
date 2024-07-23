import styles from "./styles.css";

function Productgrid() {
  var products = [
    {
      id: "1",
      thumbnail:
        "https://th.bing.com/th/id/OIP.FcmvMj1OjD4QTauYesb3aAHaFj?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Ricardo B.",
      specialist: "Digital Marketing Specialist: SEO -SEM -SMM- inbou...",

      price: "34",

      rating: "4.7",
      job: "206",
      skills: [
        "Social Media Marketing",
        "Content Marketing ",
        "Search Engine Optimization ",
        "Social Media Marketing",
        "Content Marketing ",
        "Search Engine Optimization ",
      ],
      button: "See more",
    },
    {
      id: "2",
      thumbnail:
        "https://th.bing.com/th/id/OIP.ocv4jX7yJmuAi0yAZWI1MQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Dmytro T.",
      specialist: "Google Ads Experts|SEM Manager|PPC Experts|Digita...",

      price: "30",

      rating: "5.0",
      job: "38",
      skills: [
        "Search Engine Marketing Strategy",
        "Search Engine Marketing",

        "Search Engine Marketing",
        "Search Engine Marketing Strategy",
        "Search Engine Marketing",

        "Search Engine Marketing",
      ],
      button: "See more",
    },
    {
      id: "3",
      thumbnail:
        "https://th.bing.com/th/id/OIP.kDKfNuhpnsDbKgyUFeIBbgHaDu?w=299&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "HO Lam L.",
      specialist: "Google Ads Specialist",

      price: "15",

      rating: "5.0",
      job: "2",
      skills: [
        "Search Engine Marketing",
        "Google Analytics",
        "Google Tag Manager",
        "Google Ads",
      ],
      button: "See more",
    },
    {
      id: "4",
      thumbnail:
        "https://th.bing.com/th/id/OIP.1H4TjeN5dyNQdkXtz-q7IwHaE2?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Manish R.",
      specialist: "Google Ads Manager |/Search&Shopping Ads|Faceboo...",

      price: "10",

      rating: "4.7",
      job: "66",
      skills: [
        "Search Engine Marketing",
        "Google Tag Manager",
        "Facebook Ads Manager",
        "Search Engine Marketing",
        "Google Tag Manager",
        "Facebook Ads Manager",
      ],
      button: "See more",
    },
    {
      id: "5",
      thumbnail:
        "https://th.bing.com/th/id/OIP.ocv4jX7yJmuAi0yAZWI1MQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Rasel p.",
      specialist: "Google Tag Manager,Facebook Conversion API,Google..",

      price: "50",

      rating: "4.7",
      job: "206",
      skills: [
        "Search Engine Marketing",
        "Facebook Ads Manager",
        "Search Engine Marketing",
        "Facebook Ads Manager",
      ],

      button: "See more",
    },
    {
      id: "6",
      thumbnail:
        "https://th.bing.com/th/id/OIP.DJ3Wj5i5BXaBHQBsMu0d4QHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Vladyslav P.",
      specialist: "Google Ads Experts-Ecommerce-Google Shopping",

      price: "34",

      rating: "4.7",
      job: "26",
      skills: [
        "Search Engine Marketing",
        "Google Ads",
        "Google Shopping",
        "Google Analytics",
        "Search Engine Marketing",
        "Google Ads",
        "Google Shopping",
        "Google Analytics",
      ],
      button: "See more",
    },
  ];

  return (
    <div id="product">
      {products.map((item, i) => {
        const firstThreeSkills = item.skills.slice(0, 3);

        const remainingSkillsCount =
          item.skills.length - firstThreeSkills.length;

        return (
          <div className="pro" key={item.id}>
            <div className="image-container">
              <div className="circular-div"></div>
              <img src={item.thumbnail} className="img" alt={item.name} />
            </div>

            <h2>{item.name}</h2>
            <p>{item.specialist}</p>

            <div id="ele">
              <div>
                <p>${item.price}/hr</p>
              </div>
              <div>
                <p>🌟</p>
              </div>
              <div>
                <p>{item.rating}/5</p>
              </div>
              <div>
                <p>({item.job} jobs)</p>
              </div>
            </div>

            <div className="skill-set">
              {firstThreeSkills.map((skill, o) => (
                <p key={o}>{skill}</p>
              ))}

              {remainingSkillsCount > 0 && (
                <p className="remaining-skills">{`+${remainingSkillsCount} `}</p>
              )}
            </div>

            <button className="btn">
              <b>{item.button}</b>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Productgrid;
