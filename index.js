import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop
} from "@syncfusion/ej2-react-schedule";

import { extend } from "@syncfusion/ej2-base";
import { SampleBase } from "./sample-base";
import * as dataSource from "./datasource.json";
/**
 * Schedule Default sample
 */
export class Default extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.scheduleData, null, true);
  }
  render() {
    return (
      <div className="schedule-control-section">
        <div className="col-lg-9 control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              height="650px"
              ref={schedule => (this.scheduleObj = schedule)}
              selectedDate={new Date(2019, 0, 10)}
              eventSettings={{ dataSource: this.data }}
            >
              <ViewsDirective>
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
                <ViewDirective option="WorkWeek" />
                <ViewDirective option="Month" />
                <ViewDirective option="Agenda" />
              </ViewsDirective>
              <Inject
                services={[
                  Day,
                  Week,
                  WorkWeek,
                  Month,
                  Agenda,
                  Resize,
                  DragAndDrop
                ]}
              />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    );
  }
}

render(<Default />, document.getElementById("sample"));
