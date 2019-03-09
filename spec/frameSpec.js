describe('frame', function() {
    beforeEach(function() {
        frame = new Frame();
    });

    it('has a total that starts at 0', function() {
        expect(frame.getTotal()).toEqual(0);
    });

    it('saves the score of the first bowl', function() {
        frame.firstBowl(3);
        expect(frame.bowl1).toEqual(3);
    });

    it('saves the score of the second bowl', function() {
        frame.secondBowl(4);
        expect(frame.bowl2).toEqual(4);
    })

    it('has a total that is the sum of its bowls', function() {
        frame.firstBowl(3);
        frame.secondBowl(4);
        expect(frame.getTotal()).toEqual(7);
    });

    it('awaits a bonus if a spare (bowl1 + bowl2 = 10)', function() {
        frame.firstBowl(9);
        frame.secondBowl(1);
        expect(frame.isAwaitingBonus).toEqual(true);
    });

    it('stores a bonus', function() {
        frame.addBonus(2);
        expect(frame.bonus).toEqual(2);
    });
});