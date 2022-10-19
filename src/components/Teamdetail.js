import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function Teamdetail() {
  const { name } = useParams();
  const [index, setIndex] = useState(
    name === "nasser"
      ? 0
      : name === "marc"
      ? 1
      : name === "maureen"
      ? 2
      : name === "ira"
      ? 3
      : name === "dave"
      ? 4
      : name === "gabriel"
      ? 5
      : name === "haidar"
      ? 6
      : name === "rifky"
      ? 7
      : name === "rido"
      ? 8
      : name === "khoirul"
      ? 9
      : name === "imam"
      ? 10
      : null
  );

  const teamdesc = [
    [
      "Nasser Ahmad",
      "Coach Nasser has always been passionate about the kids who fall behind or are mistreated. An Ex Police Officer, World Traveler, Scuba Diver and now coach, he brings his visual and emotional global experience to the learners of today. Hard Knocks of life just became a way of life until he made the decision to take the lead to LIVE to WIN! A man with passion and purpose, Coach Nasser focuses on building your self esteem and confidence through his coaching process. Great footballer too!",
      "Coaching Strength: Team Building, Leadership and Social Emotional Learning",
      "  ",
      "https://www.linkedin.com/in/nasser-ahmad-1ab260251/",
      "  ",
    ],
    [
      "Marc Grosse",
      "An Aircraft Engineer and Interior Designer in his past life, Coach Marc’s ability to empathize separates him from the crowd. He has dealt with the toughest people and situations in his life professionally, financially and personally that led him to come into the world of education to help others who are going through the tough time of life; kid or adult. Say it as it is, but in the best way that will reach you. Amazing 'Dancer'.",
      "Coaching Strengths: Team Building, Social Emotional Learning and Parent Coaching",
      "  ",
      " https://www.linkedin.com/in/marc-g-42476b251/ ",
      "  ",
    ],
    [
      "Maureen Aquino",
      "A lover of great education is what she truly represents. Lifelong learning is something Maureen has embraced and she makes it clear that one has to be willing to learn till their very last day on earth. Maureen constantly seeks and builds amazing learning experiences, especially for the early learners. Enter any room and it will feel ALIVE only for one reason; it's because Maureen is there.",
      "Coaching Strengths: Parent Coaching and Early Childhood Education",
      "  ",
      "  ",
      "  ",
    ],
    [
      "Ira Atiqah",
      "World Class Athlete, Design Thinker, Instructional Designer, Netball Coach, Co Founder, Entrepreneur and you just run out of adjectives to describe this powerhouse of a person. The fastest learner you will meet as it all comes naturally to her. As a young founder, she has been tested by the viciousness of the business and social worlds. She shares from her heart on how one should step up and step out! Crazy amazing athlete!",
      "Coaching Strengths: Leadership, Sports Peak Performance, Authentic Learning and Social Emotional Learning.",
      "https://www.instagram.com/heyiraas/",
      "https://www.linkedin.com/in/ira-atiqah/",
      "https://www.facebook.com/profile.php?id=100015297615843",
    ],
    [
      "Rahul Dave",
      "This man is all heart! His heart for the students of the world and his ability to inspire them is what defines Coach Dave. Not many will take the road less taken at a very young age. With all the uncertainties surrounding him, he took the leap of faith. Frustration, betrayal, cheating, losses surrounded him but his WILL to WIN took him forward and now, to greater heights. His sharing is from his heart. He is an Ultimate Athlete!",
      "Coaching Strengths: Leadership, Mindfulness, Sports Peak Performance, AGILE in Education, and Personal Mastery.",
      "https://www.instagram.com/rahuldavecoaches/",
      "https://www.linkedin.com/in/rahul-dave-educator/",
      "  ",
    ],
    [
      "Gabriel Suppiah",
      "The brain and the brawn. Coach Gabe has the ability to turn anything and everything into a classroom - his classroom without walls. He looks like a beast but he’s an actual softy - he takes the time to listen and understands without judgment. Being different has taken him to the highest of highs and lowest of lows. It’s all these experiences that makes him the Amazing Educator that he is today. There’s no doubt the kids in Score Campus adore him because of the love he shows every single day.",
      "Coaching Strengths: Phenomenon Based Learning, Social Emotional Learning, Leadership and Peak Performance Psychology.",
      "https://www.instagram.com/coachgabe71/",
      "https://www.linkedin.com/in/gabrielsuppiah/",
      "https://www.facebook.com/Gabrielsuppiah71",
    ],
    [
      "Haidar Rais",
      "Leading the pack in Indonesia, Haidar is a highly sought after leader in software developments. He acts as the bridge between us, the educators, and the coding world. He dreams of creating the best ed-tech for students around the world. If there is anyone who embodies independence, it’s Haidar. He gives his teammate the confidence that he will get the job done regardless of how tough the assignment is.",
      " ",
      "http://instagram.com/haidarrais_",
      "https://www.linkedin.com/in/haidar-rais-abdillah-896007157",
      "https://www.facebook.com/Haidar0Rais",
    ],
    [
      "Rifky Ariya",
      "“I learnt English from gaming!” There’s no barrier that Rifky cannot overcome. He manages to unlearn and relearn because it needs to be done. He understands what is required of him to succeed and he goes all out to get it. Rifky dares to be vocal and different, and he inspires his teammates to do so too. ",
      "  ",
      "  ",
      "https://www.linkedin.com/in/rifky-ariya-4206ba156/",
      "  ",
    ],
    [
      "Rido Fisabililah",
      "From a mere graphic designer to an in-house UI/UX designer, Rido has set the bar high for himself when it comes to designing the world’s best educational technology. He has also earned himself a “Fantastic Teammate” badge for being open to learning, willing to push boundaries and being the best at what he does.",
      "  ",
      "https://www.instagram.com/mridhofp/",
      "https://www.linkedin.com/in/mridhofp/",
      "  ",
    ],
    [
      "Khoirul Badarudin",
      "As a back-end developer, it's appropriate that he likes things that train logic and algorithms. Besides his profile which is very addicted to technology, he really likes sports, he likes to play football even though his body is not suited for sport.",
      "  ",
      "https://www.instagram.com/khoirul_bads/",
      "https://www.linkedin.com/in/khoirul-badarudin-8a8a99183/",
      "  ",
    ],
  ];

  const maxindex = teamdesc.length - 1;
  return (
    <>
      <div className="flex flex-col w-full h-[48vw] justify-center bg-teambg0 bg-center bg-cover align-middle">
        <div className="flex flex-row w-[15vw] h-[3vw] ml-[2vw] pt-[3vw] items-center content-center justify-evenly align-middle">
          <Link to="/team">
            <svg
              className="mb-[0.3vw] hover:cursor-pointer"
              width="1.5vw"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8359 7.58292L7.41502 2.162C7.30563 2.05264 7.15728 1.99121 7.0026 1.99121C6.84792 1.99121 6.69958 2.05264 6.59019 2.162L1.16927 7.58292H2.33594V12.2496C2.33594 12.4043 2.39739 12.5527 2.50679 12.6621C2.61619 12.7715 2.76456 12.8329 2.91927 12.8329H5.83594V8.74959H8.16927V12.8329H11.0859C11.2406 12.8329 11.389 12.7715 11.4984 12.6621C11.6078 12.5527 11.6693 12.4043 11.6693 12.2496V7.58292H12.8359Z"
                fill="black"
              />
            </svg>
          </Link>
          <svg
            width="1.5vw"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <p className="font-montserrat text-[1vw] place-self-center pl-[1vw]">
            {teamdesc[index][0]}
          </p>
        </div>
        <svg
          onClick={() => setIndex(index - 1)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className={
            index === 0
              ? "hidden"
              : "w-[3vw] absolute place-self-start bg-gray-300 rounded-full ml-[1vw] p-[0.5vw]"
          }
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <img
          className="absolute place-self-end w-[25vw] ml-[-7vw]"
          src={require(`../assets/${index}.png`)}
          alt={name}
        />
        <svg
          onClick={() => setIndex(index + 1)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className={
            index === maxindex
              ? "hidden"
              : "w-[3vw] absolute place-self-end bg-gray-300 rounded-full ml-[-1vw] p-[0.5vw]"
          }
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>

        <h2 className="font-montserrat text-left text-black text-[4vw] font-extrabold pt-[5vw] pl-[8vw] place-self-start">
          {teamdesc[index][0]}
        </h2>
        <p className="font-montserrat text-left text-[1.1vw] font-semibold pl-[8vw] pt-[2vw] pr-[40vw]">
          {teamdesc[index][1]}
        </p>

        <p className="font-montserrat text-left text-[1.1vw] leading-relaxed font-extrabold pl-[8vw] pt-[2vw] pr-[40vw]">
          {teamdesc[index][2]}
        </p>

        <div className="flex flex-row ml-[5.5vw] w-[15vw] h-[3vw] pt-[5vw] items-center content-center justify-evenly align-middle pb-[8vw]">
          <a href={teamdesc[index][3]}>
            <svg
              width="2vw"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z"
                fill="404040"
              />
            </svg>
          </a>

          <a href={teamdesc[index][4]}>
            <svg
              width="2vw"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z"
                fill="404040"
              />
            </svg>
          </a>

          <a href={teamdesc[index][5]}>
            <svg
              width="2vw"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.12 0H0.88C0.39325 0 0 0.39325 0 0.88V21.12C0 21.6068 0.39325 22 0.88 22H21.12C21.6068 22 22 21.6068 22 21.12V0.88C22 0.39325 21.6068 0 21.12 0ZM18.579 6.42125H16.8218C15.444 6.42125 15.1773 7.07575 15.1773 8.03825V10.1585H18.4662L18.0373 13.4777H15.1773V22H11.748V13.4805H8.87975V10.1585H11.748V7.711C11.748 4.87025 13.4832 3.322 16.0187 3.322C17.2342 3.322 18.2765 3.41275 18.5818 3.454V6.42125H18.579Z"
                fill="404040"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default Teamdetail;
