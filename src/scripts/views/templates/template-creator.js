const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item" tabindex="0">
        <img 
            class="restaurant-item__image" 
            src="${restaurant.pictureId}" 
            alt="Picture of ${restaurant.name}"
        >
        <div class="restaurant-item__content">
            <h3 class="restaurant-item__title">${restaurant.name}</h3>
            <p class="restaurant-item__city">${restaurant.city}</p>
            <p class="restaurant-item__rating">
                <i class="fas fa-star"></i> ${restaurant.rating}
            </p>
            <p>${restaurant.description.slice(0, 150)}...</p>
        </div>
    </article>
`;

export { createRestaurantItemTemplate };
