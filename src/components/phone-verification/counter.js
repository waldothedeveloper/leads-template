import React, { useCallback, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { retryTimeouts } from "../../utils/retryTimeouts";
import { timer } from "../../utils/timer";

export const Counter = ({ send, attempts }) => {
  const [counter, setCounter] = useState(() => retryTimeouts[attempts] || 30);

  useEffect(() => {
    const tick = () => {
      if (counter > 0) {
        return setCounter((c) => c - 1);
      }
      return;
    };

    const id = setTimeout(() => tick(), 1000);
    return () => clearTimeout(id);
  }, [counter]);

  // send anothe SMS
  const resetCounter = useCallback(() => {
    send("RESEND_SMS");
  }, [send]);

  //
  return (
    <div className="mt-4">
      {counter > 0 ? (
        <p className="text-sm font-medium text-gray-400 flex items-center">
          <lord-icon
            delay="2500"
            src="https://cdn.lordicon.com/sgfvvrmz.json"
            trigger="loop"
            colors="primary:#334155,secondary:#22D3EE"
            style={{ width: 25, height: 25 }}
          />{" "}
          Resend code in {timer(counter)}
        </p>
      ) : (
        <button
          onClick={resetCounter}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Request New Code
        </button>
      )}
    </div>
  );
};

Counter.propTypes = {
  requestNewCode: PropTypes.func,
  send: PropTypes.func.isRequired,
  attempts: PropTypes.number.isRequired,
};
