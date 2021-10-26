import { FormTemplate } from "../components/form-template/template";
import Layout from "../components/layout";
import PropTypes from "prop-types";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { formMachine } from "../components/machines/form-machine";
import { getCurrentQuestion } from "../utils/getCurrentQuestion";
import { options } from "../components/machines/form-machine-actions";
import { useDBTemplate } from "../hooks/useDBTemplate";
import { useMachine } from "@xstate/react";

const QuizConversion = ({ location }) => {
  const addressProps = location.state;
  const data = useDBTemplate(addressProps);
  const [state, send] = useMachine(() => formMachine(data), options);
  console.log("CONTEXT: ", state.context);

  const currentQuestion = getCurrentQuestion(state);
  // console.log("currentQuestion: ", currentQuestion);

  return (
    <Layout>
      <div className="relative lg:min-h-screen">
        <div className="absolute inset-0">
          {/* TODO: this static image needs to change per project, I think I should refactor to dynamic image coming from Contentful */}
          <StaticImage
            className="w-full h-full object-cover"
            src="../images/air-conditioner-unit-minified.jpg"
            alt="ac fix partner"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <FormTemplate
            send={send}
            currentQuestion={currentQuestion}
            stateMachine={state}
          />
        </div>
      </div>
    </Layout>
  );
};

QuizConversion.propTypes = {
  location: PropTypes.object.isRequired,
};

export default QuizConversion;
