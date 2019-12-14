import { TestBed } from '@angular/core/testing';
import { UsuariosService } from './usuarios.service';
describe('UsuariosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(UsuariosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=usuarios.service.spec.js.map