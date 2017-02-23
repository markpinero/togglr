import React, { Component } from 'react';
import { List, ListItem, FadedListItem } from './styled-components';

const timers = [
  'Timer 1',
  'Timer 2',
  'Timer 3'
]

export default class TimerList extends Component {
  render() {
    const mapTimers = timers.map((data, index) => {
      return (
        <FadedListItem key={index}>
          {data}
          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMwLjA1MSAzMC4wNTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwLjA1MSAzMC4wNTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMTkuOTgyLDE0LjQzOGwtNi4yNC00LjUzNmMtMC4yMjktMC4xNjYtMC41MzMtMC4xOTEtMC43ODQtMC4wNjJjLTAuMjUzLDAuMTI4LTAuNDExLDAuMzg4LTAuNDExLDAuNjY5djkuMDY5ICAgYzAsMC4yODQsMC4xNTgsMC41NDMsMC40MTEsMC42NzFjMC4xMDcsMC4wNTQsMC4yMjQsMC4wODEsMC4zNDIsMC4wODFjMC4xNTQsMCwwLjMxLTAuMDQ5LDAuNDQyLTAuMTQ2bDYuMjQtNC41MzIgICBjMC4xOTctMC4xNDUsMC4zMTItMC4zNjksMC4zMTItMC42MDdDMjAuMjk1LDE0LjgwMywyMC4xNzcsMTQuNTgsMTkuOTgyLDE0LjQzOHoiIGZpbGw9IiM5MURDNUEiLz4KCTxwYXRoIGQ9Ik0xNS4wMjYsMC4wMDJDNi43MjYsMC4wMDIsMCw2LjcyOCwwLDE1LjAyOGMwLDguMjk3LDYuNzI2LDE1LjAyMSwxNS4wMjYsMTUuMDIxYzguMjk4LDAsMTUuMDI1LTYuNzI1LDE1LjAyNS0xNS4wMjEgICBDMzAuMDUyLDYuNzI4LDIzLjMyNCwwLjAwMiwxNS4wMjYsMC4wMDJ6IE0xNS4wMjYsMjcuNTQyYy02LjkxMiwwLTEyLjUxNi01LjYwMS0xMi41MTYtMTIuNTE0YzAtNi45MSw1LjYwNC0xMi41MTgsMTIuNTE2LTEyLjUxOCAgIGM2LjkxMSwwLDEyLjUxNCw1LjYwNywxMi41MTQsMTIuNTE4QzI3LjU0MSwyMS45NDEsMjEuOTM3LDI3LjU0MiwxNS4wMjYsMjcuNTQyeiIgZmlsbD0iIzkxREM1QSIvPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
        </FadedListItem>
        )
    });

    return (
      <List>
        {mapTimers}
        <ListItem>
          Timer 4
          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDczLjE3IDczLjE3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3My4xNyA3My4xNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJTdG9wIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTM2LjU4NSwwQzE2LjQxMiwwLDAsMTYuNDEzLDAsMzYuNTg1czE2LjQxMiwzNi41ODQsMzYuNTg1LDM2LjU4NFM3My4xNyw1Ni43NTgsNzMuMTcsMzYuNTg1UzU2Ljc1OCwwLDM2LjU4NSwweiAgICAgIE0zNi41ODUsNjUuMjhjLTE1LjgxNywwLTI4LjY5LTEyLjg2OS0yOC42OS0yOC42OTRjMC0xNS44MTcsMTIuODczLTI4LjY4OCwyOC42OS0yOC42ODhjMTUuODIxLDAsMjguNjksMTIuODcsMjguNjksMjguNjg4ICAgICBDNjUuMjc1LDUyLjQxMSw1Mi40MDYsNjUuMjgsMzYuNTg1LDY1LjI4eiBNNDYuNzczLDI1LjAxOEgyNy40NDZjLTEuMDg3LDAtMS45NzEsMC44ODgtMS45NzEsMS45NzF2MTkuMzIzICAgICBjMCwxLjA5LDAuODg0LDEuOTc5LDEuOTcxLDEuOTc5aDE5LjMyOGMxLjA4NiwwLDEuOTcxLTAuODg5LDEuOTcxLTEuOTc5VjI2Ljk4N0M0OC43NDQsMjUuOTA0LDQ3Ljg1OSwyNS4wMTgsNDYuNzczLDI1LjAxOHoiIGZpbGw9IiNEODAwMjciLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </ListItem>
      </List>
    );
  }
}
