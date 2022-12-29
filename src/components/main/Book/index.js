import React from "react";
import styled from "styled-components";
import "./BookForm.scss";
import bookLogo from "../../../images/bookLogo.png";
import { ChevronDown } from "react-feather";

const BookSection = styled.section`
  padding: ${148 / 16}rem 0;
`;

const Wrapper = styled.div`
  background: #0c0c0c;
  border: 1px solid rgba(220, 202, 135, 0.2);
  box-shadow: 22px 30px 95px 1px rgba(0, 0, 0, 0.7);
  padding: 48px 0;
  max-width: 1286px;
  width: 100%;
  margin: 0 auto;
`;

const MainTitle = styled.h4`
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 700;
  font-size: ${23 / 18}rem;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--white);
  text-align: center;
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${8 / 16}rem;
  &::before {
    content: "";
    width: clamp(15px, 2vw, 30px);
    border: 1px solid var(--title);
    padding: 0.5px;
  }

  &::after {
    content: "";
    height: 9px;
    width: 15px;
    border-radius: 45%;
    border: 1px solid var(--title);
  }
`;

const Title = styled.h3`
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 600;
  font-size: 4rem;
  line-height: 1.3;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: var(--title);
  margin-bottom: 4rem;
`;

const BookLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -${166 / 16}rem;
`;

// ===================  Book form =======================
const BookForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  column-gap: 25px;
`;
const BookInputWrapper = styled.div`
  max-width: 412px;
  width: 100%;
  position: relative;
`;

const BookInput = styled.select`
  border: 1px solid var(--title);
  background-color: transparent;
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: 0.04em;
  color: var(--grey);
  padding: 16px;
  text-transform: capitalize;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  width: 100%;
`;
const BookOption = styled.option`
  text-align: center;
  background-color: transparent;
  margin-bottom: 1rem;
`;

const BookInputIon = styled.span`
  position: absolute;
  top: 35%;
  right: 15px;
  color: var(--title);
  cursor: pointer;
`;

// Global styled button

export const Button = styled.button`
  cursor: pointer;
  border: var(--title);
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  background: var(--title);
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 175%;
  letter-spacing: 0.04em;
  color: #0c0b08;

  @media screen and (max-width: 1150px) {
    padding: 5px 22px;
  }
  @media screen and (max-width: 600px) {
    padding: 4px 8px;
    line-height: 140%;
    font-weight: 700;
    font-size: 13px;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
`;

const Book = () => {
  return (
    <BookSection>
      <div className="wrapper">
        <BookLogo>
          <img src={bookLogo} alt="" />
        </BookLogo>
        <Wrapper>
          <MainTitle>
            Reservations <Span></Span>
          </MainTitle>
          <Title>Book A Table</Title>
          <BookForm>
            <BookInputWrapper>
              <BookInput>
                <BookOption value="1 person">1 person</BookOption>
                <BookOption value="2 person">2 person</BookOption>
                <BookOption value="3 person">3 person</BookOption>
              </BookInput>
              <BookInputIon>
                <ChevronDown />
              </BookInputIon>
            </BookInputWrapper>
            <BookInputWrapper>
              <BookInput>
                <BookOption value="10/05/2023">10/05/2023</BookOption>
                <BookOption value="12/05/2023">12/05/2023</BookOption>
                <BookOption value="20/05/2023">20/05/2023</BookOption>
              </BookInput>
              <BookInputIon>
                <ChevronDown />
              </BookInputIon>
            </BookInputWrapper>
            <BookInputWrapper>
              <BookInput>
                <BookOption value="11:00 AM">11:00 AM</BookOption>
                <BookOption value="12:00 AM">12:00 AM</BookOption>
                <BookOption value="14:00 AM">14:00 AM</BookOption>
              </BookInput>
              <BookInputIon>
                <ChevronDown />
              </BookInputIon>
            </BookInputWrapper>
          </BookForm>
          <Center>
            <Button>Book Now</Button>
          </Center>
        </Wrapper>
      </div>
    </BookSection>
  );
};

export default Book;
