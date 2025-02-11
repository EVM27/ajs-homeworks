
import Cart from './Cart';
import Movie from './Movie';

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('добавление фильма в корзину', () => {
        const movie = new Movie(1, 'Inception', 'Christopher Nolan', 2010, 500);
        cart.add(movie);
        expect(cart.items.length).toBe(1);
    });

    test('подсчет суммарной стоимости без скидки', () => {
        cart.add(new Movie(1, 'Inception', 'Christopher Nolan', 2010, 500));
        cart.add(new Movie(2, 'Interstellar', 'Christopher Nolan', 2014, 600));
        expect(cart.getTotalPrice()).toBe(1100);
    });

    test('подсчет суммарной стоимости с учетом скидки', () => {
        cart.add(new Movie(1, 'Inception', 'Christopher Nolan', 2010, 500));
        cart.add(new Movie(2, 'Interstellar', 'Christopher Nolan', 2014, 600));
        expect(cart.getTotalPriceWithDiscount(10)).toBe(990); 
    });

    test('удаление объекта по id', () => {
        const movie1 = new Movie(1, 'Inception', 'Christopher Nolan', 2010, 500);
        const movie2 = new Movie(2, 'Interstellar', 'Christopher Nolan', 2014, 600);
        cart.add(movie1);
        cart.add(movie2);
        cart.removeById(1);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0].id).toBe(2);
    });
});