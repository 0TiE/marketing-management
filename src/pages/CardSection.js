import React from 'react';

const CardSection = ({ activeTab, activeStatus, filters }) => {
  const cardsContent = {
    internal: {
      requested: ["Internal Requested Card 1", "Internal Requested Card 2", "Internal Requested Card 3"],
      pending: ["Internal Pending Card 1", "Internal Pending Card 2", "Internal Pending Card 3"],
      approved: ["Internal Approved Card 1", "Internal Approved Card 2", "Internal Approved Card 3"],
      issued: ["Internal Issued Card 1", "Internal Issued Card 2", "Internal Issued Card 3"]
    },
    partner: {
      requested: ["Partner Requested Card 1", "Partner Requested Card 2", "Partner Requested Card 3"],
      pending: ["Partner Pending Card 1", "Partner Pending Card 2", "Partner Pending Card 3"],
      approved: ["Partner Approved Card 1", "Partner Approved Card 2", "Partner Approved Card 3"],
      issued: ["Partner Issued Card 1", "Partner Issued Card 2", "Partner Issued Card 3"]
    }
  };

  const filterCards = (cards) => {
    
    return cards.filter(card => {
     
      if (filters.timeframe !== 'All-time' && !card.includes(filters.timeframe)) return false;
      if (filters.partner !== 'All' && !card.includes(filters.partner)) return false;
      if (filters.product !== 'All' && !card.includes(filters.product)) return false;
      return true;
    });
  };

  const renderCards = () => {
    const cards = cardsContent[activeTab][activeStatus];
    const filteredCards = filterCards(cards);
    return filteredCards.map((text, idx) => (
      <div key={idx} className="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card {idx + 1}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container p-3">
      <div className="row">
        {renderCards()}
      </div>
    </div>
  );
};

export default CardSection;
