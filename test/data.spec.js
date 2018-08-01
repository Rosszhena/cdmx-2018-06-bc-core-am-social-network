describe('index', () => {

    it('debería ser un objeto', () => {
      assert.equal(typeof social, 'object');
    });
  
    describe('social.registrar', () => {
  
      it('debería ser una función', () => {
        assert.equal(typeof social.registrar, 'function');
       // assert.isFunction(social.registrar);
      });
  
    });
    describe('social.ingreso', () => {
  
        it('debería ser una función', () => {
          assert.equal(typeof social.ingreso, 'function');
        });
    
      });
  
  });
  