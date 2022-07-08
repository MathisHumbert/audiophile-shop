import styled from 'styled-components';

export default function ProductFeatures({ features }: { features: string }) {
  const featuresArr = features.split(/\r?\n/).filter((item) => item !== '');

  return (
    <Wrapper>
      <h3 className='title'>features</h3>
      <div className='text'>
        {featuresArr.map((item, index) => {
          return (
            <p key={index} className='body'>
              {item}
            </p>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 88px;

  .body {
    opacity: 0.5;
    text-align: justify;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .title {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    padding-top: 120px;

    .title {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1440px) {
    padding-top: 0;
  }
`;
