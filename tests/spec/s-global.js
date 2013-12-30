describe('global methods', function () {
    'use strict';

    describe('parseInt', function () {
        it('accepts a radix', function () {
            for (var i = 2; i <= 36; ++i) {
                expect(parseInt('10', i)).toBe(i);
            }
        });

        it('defaults the radix to 10 when the number does not start with 0x or 0X', function () {
           [
               '01',
               '08',
               '10',
               '42'
           ].forEach(function (str) {
               expect(parseInt(str)).toBe(parseInt(str, 10));
           });
        });

        it('defaults the radix to 16 when the number starts with 0x or 0X', function () {
            expect(parseInt('0x16')).toBe(parseInt('0x16', 16));
            expect(parseInt('0X16')).toBe(parseInt('0X16', 16));
        });
    });
});

