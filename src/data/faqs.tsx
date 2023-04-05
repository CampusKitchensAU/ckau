import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "Where is Campus Kitchen located?",
    answer: (
      <span>
        Campus Kitchen is situated in Lupton Hall, in the Lower Quad of Auburn
        University, facing Roosevelt Concourse, and adjacent to the Campus Food
        Pantry. Directions can be found{" "}
        <Link
          href="http://maps.apple.com/?q=32.60147949529354,-85.48523394438007"
          className="font-semibold text-secondary hover:text-secondary-300"
        >
          here
        </Link>
        .
      </span>
    ),
  },
  {
    id: 2,
    question: "What is Campus Kitchen's mission?",
    answer: (
      <span>
        Campus Kitchen is a 501(c)3 non-profit organization dedicated to
        combating food insecurity at Auburn University and in the Auburn/Opelika
        community. To achieve this goal, we repurpose surplus food from dining
        halls and on-campus organizations, package it into individualized meals,
        and distribute it to those in need. Campus Kitchen also educates and
        engages the community on issues related to food insecurity and food
        waste, with the ultimate goal of establishing a stronger, more
        sustainable food system that provides access to nutritious food for
        everyone.
      </span>
    ),
  },
  {
    id: 3,
    question: "Who is eligible to receive meals from Campus Kitchen?",
    answer: (
      <span>
        <ul className="list-disc space-y-4 pl-5">
          <li>
            Campus Kitchen serves Auburn University students facing food
            insecurity through the Auburn Family Meals (AFM) program.
            Eligibility is open to all students who are in need, without any
            specific restrictions.
          </li>
          <li>
            In addition to serving Auburn University students, Campus Kitchen
            operates an in-house Meals on Wheels delivery service for elderly
            residents who are food insecure, disabled, or lack transportation.
          </li>
          <li>
            Campus Kitchen also collaborates with various community
            organizations in the Auburn/Opelika area that provide resources and
            support to individuals and families facing food insecurity.
          </li>
        </ul>
        <div className="mt-6">
          If you have questions about any of the above eligibilities or would
          like to partner with Campus Kitchen, please contact{" "}
          <Link
            href="mailto:theckau@gmail.com"
            className="font-semibold text-secondary hover:text-secondary-300"
          >
            theckau@gmail.com
          </Link>
          .
        </div>
      </span>
    ),
  },
  {
    id: 4,
    question: "When do Campus Kitchen shifts take place?",
    answer: (
      <span>
        Campus Kitchen offers pickup, packaging, and delivery shifts throughout
        the week. You can find available shifts and sign up for them by visiting
        our{" "}
        <Link
          href="https://auburn.campuslabs.com/engage/organization/thecampuskitchenatau"
          className="font-semibold text-secondary hover:text-secondary-300"
        >
          AUInvolve page
        </Link>
        . The shifts are typically flexible and can accommodate various
        schedules, allowing you to choose the ones that work best for you.
        Volunteering your time with Campus Kitchen is a meaningful way to make a
        positive impact on the lives of those facing food insecurity in the
        Auburn/Opelika community and at Auburn University.
      </span>
    ),
  },
  {
    id: 5,
    question: "What kind of food is Campus Kitchen eligible to pick up?",
    answer: (
      <span>
        Campus Kitchen is authorized to collect surplus food from dining halls
        and on-campus organizations. The specific types of food we can pick up
        depend on what is available and being served at the dining halls and
        on-campus events. Generally, Campus Kitchen can collect a variety of
        perishable and non-perishable foods, including fruits, vegetables,
        meats, grains, and canned goods. However, the food must be unserved and
        in excess of what is needed by the dining halls or on-campus
        organizations. It cannot have been on the serving line or served to
        guests, and it must be unused, unopened, with all packaging intact, and
        within the expiration date. This ensures that the food is safe for
        consumption and meets health and safety regulations. Once the unserved
        food is collected, our team follows food handling and safety procedures
        to ensure it is safe to eat and ready for distribution to those in need
        in the Auburn/Opelika community and at Auburn University.
      </span>
    ),
  },
  {
    id: 6,
    question: "How can I get involved with Campus Kitchen?",
    answer: (
      <span>
        There are multiple ways to get involved with Campus Kitchen and support
        its mission. Some of the options available include:
        <ul className="mt-4 list-decimal space-y-4 pl-5">
          <li>
            <span className="font-semibold text-secondary">Volunteer:</span>{" "}
            Sign up for one-hour shifts to assist with various tasks such as
            picking up food, packaging meals, and delivering meals to those in
            need. You can choose the frequency of your volunteering based on
            your availability.
          </li>
          <li>
            <span className="font-semibold text-secondary">
              Spread the word:
            </span>{" "}
            You can raise awareness about Campus Kitchen and its mission by
            sharing information about the organization on social media or by
            communicating with others about it.
          </li>
          <li>
            <span className="font-semibold text-secondary">Donate:</span> Donate
            surplus food from events hosted by your organization or contribute
            money to support our operations.
          </li>
          <li>
            <span className="font-semibold text-secondary">
              Coordinate a group shift:{" "}
            </span>{" "}
            If you are part of an organization, you can organize a group shift
            with Campus Kitchen. This provides an excellent opportunity to build
            teamwork while also giving back to the community.
          </li>
        </ul>
      </span>
    ),
  },
  {
    id: 7,
    question: "What is the Auburn Family Meals program?",
    answer: (
      <span>
        The Auburn Family Meals (AFM) program is a meal distribution initiative
        designed to provide free and nutritious meals to Auburn University
        students experiencing food insecurity. The program is located in Lupton
        Hall and is administered by Campus Kitchen and caters to the dietary
        requirements and preferences of participating students. The program is
        also confidential, ensuring that students receive meals without fear of
        judgement or stigma. The AFM program is a crucial resource for students
        who are facing financial difficulties and provides much-needed support
        to those in need.
        <div className="mt-4">
          This program runs on{" "}
          <span className="font-semibold text-secondary">
            Monday&apos;s and Wednesday&apos;s from 5:30 PM - 6:30 PM
          </span>{" "}
          and on{" "}
          <span className="font-semibold text-secondary">
            Friday&apos;s from 12:00 PM - 4:00 PM, 5:30 PM - 6:30 PM
          </span>
          .
        </div>
      </span>
    ),
  },
  {
    id: 8,
    question: "How can I become a shift leader?",
    answer: (
      <span>
        To become a shift leader at Campus Kitchen, we recommend following these
        steps:
        <ul className="mt-4 list-decimal space-y-4 pl-5">
          <li>
            <span className="font-semibold text-secondary">
              Gain experience:
            </span>{" "}
            Before becoming a shift leader, it is important to have volunteering
            experience with Campus Kitchen. We suggest signing up for regular
            volunteer shifts to become familiar with our organization&apos;s
            procedures and goals.
          </li>
          <li>
            <span className="font-semibold text-secondary">
              Express interest:
            </span>{" "}
            Let our team know that you are interested in becoming a shift
            leader. We will be happy to provide you with more information about
            the position.
          </li>
          <li>
            <span className="font-semibold text-secondary">Apply:</span> When
            shift leader applications open, we encourage you to apply! No prior
            leadership or community service experience is required.
          </li>
          <li>
            <span className="font-semibold text-secondary">Interview:</span> If
            your application is successful, you will be invited to interview for
            the shift leader position. Be prepared to discuss why you would be a
            good fit for the role.
          </li>
          <li>
            <span className="font-semibold text-secondary">
              Attend shift leader training:
            </span>{" "}
            If selected as a shift leader, you will be required to attend
            training to learn more about the responsibilities and expectations
            of the position.
          </li>
        </ul>
      </span>
    ),
  },
  {
    id: 9,
    question: "How can I donate?",
    answer: (
      <span>
        If you are interested in donating to Campus Kitchen, there are a variety
        of ways to get involved. Here are the steps to follow:
        <ul className="mt-4 list-decimal space-y-4 pl-5">
          <li>
            <span className="font-semibold text-secondary">
              Make a financial donation:
            </span>{" "}
            You can make a financial donation{" "}
            <Link
              href="https://alumniq.auburn.edu/giving/to/campuskitchens"
              className="font-semibold text-secondary hover:text-secondary-300"
            >
              here
            </Link>{" "}
            using a credit card or other online payment methods.
          </li>
          <li>
            <span className="font-semibold text-secondary">
              Donate food or supplies:
            </span>{" "}
            If you have surplus food from an event or organization that you
            would like to donate to Campus Kitchen, you can email us at{" "}
            <Link
              href="mailto:theckau@gmail.com"
              className="font-semibold text-secondary hover:text-secondary-300"
            >
              theckau@gmail.com
            </Link>{" "}
            to coordinate a pickup. We accept non-perishable and perishable
            foods, as long as the food is still safe to eat and has not passed
            its expiration date. Please note that perishable food items must be
            stored at proper temperatures prior to pick-up to ensure food
            safety.
          </li>
        </ul>
        <div className="mt-4">
          Remember that every little bit helps, and even a small donation can
          make a big difference in the lives of those who are food insecure.
          Thank you for considering a donation to Campus Kitchen!
        </div>
      </span>
    ),
  },
];

export default faqs;
