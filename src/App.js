import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [showError, setShowError] = useState(false);
  const [resultText, setResultText] = useState("");

  const handleClose1 = (event) => {
    setSelectedOption1(event.target.innerText);
    setAnchorEl1(null);

    setIsSubmitEnabled(() => {
      return selectedOption2 !== "" && event.target.innerText !== selectedOption2;
    });

    // if (selectedOption2 !== "") {
    //   setIsSubmitEnabled(true);
    // }

    // if (selectedOption1 === selectedOption2) {
    //   setShowError(true);
    //   setIsSubmitEnabled(false);
    //   } else {
    //   setShowError(false);
    //   }
  };
  
  const handleClose2 = (event) => {
    setSelectedOption2(event.target.innerText);
    setAnchorEl2(null);

    setIsSubmitEnabled(() => {
      return selectedOption1 !== "" && event.target.innerText !== selectedOption1;
    });

    // if (selectedOption1 !== "") {
    //   setIsSubmitEnabled(true);
    // }

    // if (selectedOption1 === selectedOption2) {
    //   setShowError(true);
    //   setIsSubmitEnabled(false);
    //   } else {
    //   setShowError(false);
    //   }
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setSelectedOption(event.target.innerText);
    setAnchorEl(null);
  };
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const submitHandler = () => {
    if (selectedOption1 === selectedOption2) {
      setShowError(true);
      setIsSubmitEnabled(false);
    } else {
      setShowError(false);
      setIsSubmitEnabled(true);
      switch (selectedOption1) {
        case "XLRE":
          switch (selectedOption2) {
            case "XLU":
              setResultText("XLRE Avg. ESG score (1055) is less than XLU Avg. ESG score (1197)");
              break;
            case "ESGU":
              setResultText("XLRE Avg. ESG score (1055) is way higher than SP ESG Avg. ESG score (114)");
              break;
            default:
              setResultText("");
              break;
          }
          break;
        case "XLU":
          switch (selectedOption2) {
            case "XLRE":
              setResultText("XLU Avg. ESG score (1197) is more than XLU Avg. ESG score (1055)");
              break;
            case "ESGU":
              setResultText("XLU Avg. ESG score (1197) is way higher than SP ESG Avg. ESG score (114)");
              break;
            default:
              setResultText("");
              break;
          }
          break;
        case "ESGU":
          switch (selectedOption2) {
            case "XLRE":
              setResultText("SP ESG Avg. ESG score (114) is way less than XLRE Avg. ESG score (1055)");
              break;
            case "XLU":
              setResultText("SP ESG Avg. ESG score (114) is way less than XLU Avg. ESG score (1197)");
              break;
            default:
              setResultText("");
              break;
          }
          break;
        default:
          setResultText("");
          break;
      }
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title" style={{ fontStyle: "italic", fontWeight: "normal" }}>
    Compare ESG scores of ETF fund holdings in your portfolio
        </h3>
        <Button
        id="demo-customized-button-3"
        aria-controls={open ? 'demo-customized-menu-3' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedOption || "Source"}
      </Button>
      <StyledMenu
        id="demo-customized-menu-3"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button-3',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          
          ESG Enterprise
        </MenuItem>
        
      </StyledMenu>
      <div>
          <p></p>
        </div>
        <div className="dropdown-container">
          <div className="dropdown">
          <Button
        id="demo-customized-button-1"
        aria-controls={open ? 'demo-customized-menu-1' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick1}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedOption1 || "ETF"}
      </Button>
      <StyledMenu
        id="demo-customized-menu-1"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button-1',
        }}
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
      >
        <MenuItem onClick={handleClose1} disableRipple>
          
          XLRE
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple>
          
          XLU
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem onClick={handleClose1} disableRipple>
          
          ESGU
        </MenuItem>
        
      </StyledMenu>
            </div>
            <div className="dropdown">
          <Button
        id="demo-customized-button-2"
        aria-controls={open ? 'demo-customized-menu-2' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick2}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedOption2 || "ETF"}
      </Button>
      <StyledMenu
        id="demo-customized-menu-2"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button-2',
        }}
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
      >
        <MenuItem onClick={handleClose2} disableRipple>
          
          XLRE
        </MenuItem>
        <MenuItem onClick={handleClose2} disableRipple>
          
          XLU
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem onClick={handleClose2} disableRipple>
          
          ESGU
        </MenuItem>
        
      </StyledMenu>
            </div>
        </div>
        <div>
          <p></p>
        </div>
        <div className="submit-button">
            <Button
            variant="contained"
            disabled={!isSubmitEnabled}
            onClick={submitHandler}
            >
            Submit
          </Button>
          </div>
          <div>
          <p></p>
        </div>
        {showError && (
          <div className="error-text">
            Please select different options.
          </div>
        )}
        {resultText && (
          <div className="result-text">
            {resultText}
          </div>
        )}
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
          <p style={{ fontSize: "14px", fontStyle: "bold" }}> ETFs available for comparison (as of 13th April 2023):<br />
            </p>
            <p style={{ fontSize: "10px"}}>
            XLRE:   Real Estate Select Sector SPDR Fund<br />
            XLU:  Utilities Select Sector SPDR Fund<br />
            ESGU:  iShares ESG Aware MSCI USA ETF<br />
          </p>
      </header>
    </div>
    
  );
}

export default App;
