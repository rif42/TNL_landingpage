import React, { useState } from "react";

function Privacypolicy() {
  const [policy1, setpolicy1] = useState(1);
  const [policy2, setpolicy2] = useState(1);
  const [policy3, setpolicy3] = useState(0);
  const [policy4, setpolicy4] = useState(0);
  const [policy5, setpolicy5] = useState(0);
  const [policy6, setpolicy6] = useState(0);
  const [policy7, setpolicy7] = useState(0);
  const [policy8, setpolicy8] = useState(0);
  const [policy9, setpolicy9] = useState(0);
  const [policy10, setpolicy10] = useState(0);
  const [policy11, setpolicy11] = useState(0);
  const [policy12, setpolicy12] = useState(0);

  return (
    <>
      <div className="w-full h-[20vw] flex flex-col justify-center align-middle">
        <h1 className="font-montserrat font-extrabold text-[4vw] text-center pt-[3vw]">
          Privacy Policy
        </h1>
        <p className="font-montserrat text-center text-[0.9vw] ">
          Last updated : May 5th, 2022
        </p>
        <p className="font-montserrat text-center font-semibold text-[1vw] pt-[2vw] px-[30vw]">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
          <br />
          <br /> We use Your Personal data to provide and improve the Service.
          By using the Service, You agree to the collection and use of
          information in accordance with this Privacy Policy.
        </p>
      </div>

      <div className="w-full h-fit flex flex-col justify-center align-middle px-[5vw] pt-[5vw]">
        <h2 className="font-montserrat text-[1.5vw] font-bold text-left py-[0.5vw]">
          Interpretation and Definitions
        </h2>
        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] py-[1vw] px-[2vw]">
          Interpretation
          <svg
            onClick={() => setpolicy1(!policy1)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy1 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <p
            className={
              policy1
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
        </div>

        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] py-[1vw] mt-[0.75vw] px-[2vw]">
          Definitions
          <svg
            onClick={() => setpolicy2(!policy2)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy2 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <p
            className={
              policy2
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            For the purposes of this Privacy Policy:
            <br />
            <br />
            <ul className="list-disc pl-[2vw]">
              <li>
                <bold>Company</bold> (referred to as either "the Company", "We",
                "Us" or "Our" in this Agreement) refers to Score Campus, 226
                Upper Thomson Rd, Singapore 574358.
              </li>
              <li>
                <bold>Country</bold> refers to: Your respected countries
              </li>
              <li>
                <bold>Personal Data</bold> is any information that relates to an
                identified or identifiable individual.
              </li>
              <li>
                <bold>Service</bold> refers to what service Score Campus offers
              </li>
              <li>
                <bold>Website</bold> refers to Score Campus AND The Next Level
                Camp, accessible from https://www.facebook.com/ScoreCampus AND
                https://thenextlevelcamp.com/
              </li>
              <li>
                <bold>You</bold> mean the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </li>
            </ul>
            <br />
            You agree to the collection and use of information in accordance
            with this Privacy Policy.
          </p>
        </div>

        <h2 className="font-montserrat text-[1.5vw] font-bold text-left pt-[2vw] py-[0.5vw]">
          Collecting and Using Your Personal Data
        </h2>
        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Types of Data Collected
          <svg
            onClick={() => setpolicy3(!policy3)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy3 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy3
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            <p className="text-[1vw] font-semibold pb-[0.5vw]">Personal Data</p>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
            <ul className="list-disc pl-[2vw]">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
            </ul>
          </div>
        </div>

        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Use of Your Personal Data
          <svg
            onClick={() => setpolicy4(!policy4)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy4 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy4
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            The Company may use Personal Data for the following purposes:
            <ul className="list-disc pl-[2vw]">
              <li>
                <bold>To provide and maintain our Service</bold>, including to
                monitor the usage of our Service.
              </li>
              <li>
                <bold>For the performance of a contract</bold>: the development,
                compliance and undertaking of the purchase contract for the
                products, items or services You have purchased or of any other
                contract with Us through the Service.
              </li>
              <li>
                <bold>To contact You</bold>: To contact You by email, telephone
                calls, SMS, or other equivalent forms of electronic
                communication, such as a mobile application's push notifications
                regarding updates or informative communications related to the
                functionalities, products or contracted services, including the
                security updates, when necessary or reasonable for their
                implementation.
              </li>
              <li>
                <bold>To provide You</bold> with news, special offers and
                general information about other goods, services and events which
                we offer that are similar to those that you have already
                purchased or enquired about unless You have opted not to receive
                such information.
              </li>
              <li>
                <bold>For other purposes</bold>: We may use Your information for
                other purposes, such as data analysis, identifying usage trends,
                determining the effectiveness of our promotional campaigns and
                to evaluate and improve our Service, products, services,
                marketing and your experience.
              </li>
            </ul>
          </div>
        </div>

        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Retention of Your Personal Data
          <svg
            onClick={() => setpolicy5(!policy5)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy5 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy5
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
            <br />
            <br />
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </div>
        </div>

        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Transfer of Your Personal Data
          <svg
            onClick={() => setpolicy6(!policy6)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy6 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy6
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            from those from Your jurisdiction.
            <br />
            <br />
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
            <br />
            <br />
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </div>
        </div>

        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Disclosure of Your Personal Data
          <svg
            onClick={() => setpolicy7(!policy7)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy7 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy7
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            <p className="text-[1vw] font-semibold pb-[0.5vw]">
              Law enforcement
            </p>
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
            <br />
            <br />
            <p className="text-[1vw] font-semibold pb-[0.5vw]">
              Other legal requirements
            </p>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to: Comply with a legal obligation
            <ul className="list-disc pl-[2vw]">
              <li>Protect and defend the rights or property of the Company</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>
          </div>
        </div>

        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Security of Your Personal Data
          <svg
            onClick={() => setpolicy8(!policy8)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy8 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy8
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </div>
        </div>

        <h2 className="font-montserrat text-[1.5vw] font-bold text-left pt-[2vw] py-[0.5vw]">
          Children's Privacy
        </h2>
        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Children's Privacy
          <svg
            onClick={() => setpolicy9(!policy9)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy9 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy9
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
            <br />
            <br />
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent's consent before We collect and use that
            information.
          </div>
        </div>

        <h2 className="font-montserrat text-[1.5vw] font-bold text-left pt-[2vw] py-[0.5vw]">
          Links to Other Websites
        </h2>
        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Links to Other Websites
          <svg
            onClick={() => setpolicy10(!policy10)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy10 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy10
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party's site. We strongly advise You to
            review the Privacy Policy of every site You visit.
            <br />
            <br />
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </div>
        </div>

        <h2 className="font-montserrat text-[1.5vw] font-bold text-left pt-[2vw] py-[0.5vw]">
          Changes to this Privacy Policy
        </h2>
        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Changes to this Privacy Policy
          <svg
            onClick={() => setpolicy11(!policy11)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy11 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy11
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
            <br />
            <br />
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
            <br />
            <br />
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </div>
        </div>

        <h2 className="font-montserrat text-[1.5vw] font-bold text-left pt-[2vw] py-[0.5vw]">
          Contact Us
        </h2>
        <div className="font-montserrat text-[1.2vw] font-semibold text-left rounded-xl border-black border-[0.1vw] mt-[0.75vw] py-[1vw] px-[2vw]">
          Contact Us
          <svg
            onClick={() => setpolicy11(!policy11)}
            className="h-[1.5vw] absolute ml-[84vw] mt-[-1.5vw]"
            viewBox="0 0 20 20"
          >
            <line //horizontal line = minus icon
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke="black"
              strokeWidth={3}
            />
            {policy11 ? null : (
              <line //horizontal + vertical line = plus icon
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="black"
                strokeWidth={3}
              />
            )}
          </svg>
          <div
            className={
              policy11
                ? "font-montserrat font-normal leading-snug text-[1vw] text-left py-[0.75vw]"
                : "hidden"
            }
          >
            If you have any questions about this Privacy Policy, You can contact
            us:
            <ul className="list-disc pl-[2vw]">
              <li>
                By visiting this page on our website:
                https://thenextlevelcamp.com/contact.html
              </li>
              <li>By phone number: +65 9182 2117 (Ira Atiqah)</li>
            </ul>
          </div>
        </div>

        <div className="h-[3vw]"></div>
      </div>
    </>
  );
}

export default Privacypolicy;
