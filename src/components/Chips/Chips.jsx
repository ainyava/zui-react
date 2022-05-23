import React, { useRef, useEffect } from "react";
import { MDCChipSet } from "@material/chips";
import "./styles.scss";

const Button = function (props) {
  const ref = useRef();

  useEffect(() => {
    new MDCChipSet(ref.current);
  }, []);

  return (
    <span class="mdc-evolution-chip-set" role="grid" ref={ref} {...props}>
      <span class="mdc-evolution-chip-set__chips" role="presentation">
        {props.items.map((item) => (
          <span class="mdc-evolution-chip" role="row" id="c0">
            <span
              class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
              role="gridcell"
            >
              <button
                class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                type="button"
                tabindex="0"
              >
                <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"></span>
                <span class="mdc-evolution-chip__text-label">{item}</span>
              </button>
            </span>
          </span>
        ))}
      </span>
    </span>
  );
};
export default Button;
