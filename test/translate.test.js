describe('translate', function ()
{
    // 1. Multiple tests for words starting with different vowels.
    it('word starting with a', function ()
    {
        expect(translate('acne')).toEqual('acneway')

    })
    it('word starting with e', function ()
    {
        expect(translate('elephant')).toEqual('elephantway')

    })
    it('word starting with i', function ()
    {
        expect(translate('igloo')).toEqual('iglooway')
    })
    it('word starting with o', function ()
    {
        expect(translate('outside')).toEqual('outsideway')
    })
    it('word starting with u', function ()
    {
        expect(translate('ugly')).toEqual('uglyway')
    })
});

// 2. At least one test for words starting with one consonant.
describe('translate', function ()
{
    it('word starting with one constanant', function ()
    {
        expect(translate('card')).toEqual('ardcay')
    })
});

// 3. At least one test for words starting with two consonants.
describe('translate', function ()
{
    it('word starting with two constanant', function ()
    {
        expect(translate('stealth')).toEqual('ealthstay')
    })
});

// 4. At least one test for words starting with three consonants. 

describe('translate', function ()
{
    it('word starting with thre constanant', function ()
    {
        expect(translate('stripe')).toEqual('ipestray')
    })
});
// 5. At least one test checking for lower case conversion. 
describe('translate', function(){
    it('lowercase conversion', function (){
        expect(translate('CRAZY')).toEqual('azycray')
    })
});