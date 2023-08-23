import reducer from './hotelsSlice';

describe('hotelsSlice',() => {
    test('должно вернуть initial state',() => {
        expect(reducer(undefined,{type:undefined})).toContain(location)

    })
})