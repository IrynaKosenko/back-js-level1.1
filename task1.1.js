function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) 
{
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;
    this.getID = function(){return this.ID};
    this.setID = function(id){this.ID = id;};
    this.getName = function(){return this.name};
    this.setName = function(name){this.name = name};
    this.getDescription = function(){return this.description};
    this.setDescription = function(description){this.description = description;};
    this.getPrice = function(){return this.price};
    this.setPrice = function(price){this.price = price};
    this.getBrand = function(){return this.brand};
    this.setBrand = function(brand){this.brand = brand;};
    this.getSizes = function(){return this.sizes};
    this.setSizes = function(sizes){this.sizes = sizes};
    this.getActiveSize = function(){return this.activeSize};
    this.setActiveSize = function(activeSize){this.activeSize = activeSize;};
    this.getQuantity = function(){return this.quantity};
    this.setQuantity = function(quantity){this.quantity = quantity};
    this.getDate = function(){return this.date};
    this.setDate = function(date){this.date = date};
    this.getReviews = function(){return this.reviews};
    this.setReviews = function(reviews){this.reviews = reviews;};
    this.getImages = function(){return this.images};
    this.setImages = function(images){this.quantimagesty = images};

    this.getReviewByID = function(revID){
      let arrayReviews = this.reviews;
      for(let value of arrayReviews){
        if(value.reviewID === revID)
          return value;
      }
    };

    this.getImage = function(img){
    let arrayImages = this.images;
      for(let value of arrayImages){
        if(value === img){
          return value 
        } 
      }return this.images[0];
    };

    this.addSize = function(newSize){
      this.sizes.push(newSize);
    }
    this.deleteSize = function(delSize){
      for(let i = 0; i < this.sizes.length; i++){
        if(this.sizes[i] === delSize){
          this.sizes.splice(i, 1)
        }
      }
    }
    this.addReview = function(newReview){
      this.reviews.push(newReview);
    }
    this.deleteReview =  function(delReviewID){
      for(let i = 0; i < this.reviews.length; i++){
        if(this.reviews[i].reviewID === delReviewID){
          this.reviews.splice(i, 1)
        }
      }
    }
    this.getAverageRating = function(){
      console.log(this.reviews.rating);
      let sum = 0;
      for (let element in this.reviews) {
        console.log(element.rating);
        for(let elRating in element.rating){
          //sum += [element];
        }
        
      }
      console.log(sum);
      return sum/4;
    }
  }
 
function review(reviewID, author, reviewDate, comment, rating)
  {
    return{
    reviewID,
    author,
    reviewDate,
    comment,
    rating,
    };
  }

  const rating1 = [];
  rating1['service'] = '5';
  rating1['price'] = '5';
  rating1['value'] = '5';
  rating1['quality'] = '5';

  const rating2 = [];
  rating2['service'] = '5';
  rating2['price'] = '3';
  rating2['value'] = '1';
  rating2['quality'] = '2';

  let review1 = review('158', 'Sam', new Date(), 'ahbgdbbdn', rating1);
  let review2 = review('2659', 'Tom', new Date('2019,10,15'), 'lmkmmkmlkmklm', rating2);
  let review3 = review('11', 'Samanta', new Date('2022,08,03'), 'Zyg jfh hbf', rating1);
  
  let telephone = new Product('1', 'Samsung','tel',25.5,'PPP',
  ['1','2','3'],'3', 2, new Date('2019-01-01'), [review1, review2], ['img1','img2','img3'] );

  //telephone.setID('55');
  //console.log(telephone);
  //console.log(review2);
  //console.log(telephone.getReviewByID('2659'));
  //console.log(telephone.getImage('img3'));
  //telephone.addSize('10');
  // console.log(telephone.getSizes());
  // telephone.deleteSize('1');
  // console.log(telephone.getSizes());
  // telephone.addReview(review3);
  // console.log(telephone.getReviews());
  // telephone.deleteReview('11');
  // console.log(telephone.getReviews());
  //console.log(rating2);
  console.log(telephone.getAverageRating());
  


