package ke.springboot.java.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	//@RequestMapping("/category/{id}/products")
	@RequestMapping("/products")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}
	
	//@RequestMapping("/category/{categoryId}/products/{id}")
	@RequestMapping("/products/{id}")
	public Optional<Product> getproduct(@PathVariable String id) {
		return productService.getProduct(id);
	}
	
	//@RequestMapping(method=RequestMethod.POST, value="/category/{categoryId}/products")
	@RequestMapping(method=RequestMethod.POST, value="/products")
	public void addproduct(@RequestBody Product product) {
		productService.addProduct(product);
	}
	
	//@RequestMapping(method=RequestMethod.PUT, value="/category/{categoryId}/products/{id}")
	@RequestMapping(method=RequestMethod.PUT, value="/products/{id}")
	public void updateproduct(@RequestBody Product product, @PathVariable String categoryId, @PathVariable String id) {
		productService.updateProduct(product);
	}
	
	
	//@RequestMapping(method=RequestMethod.DELETE, value="/category/{categoryId}/products/{id}")
	@RequestMapping(method=RequestMethod.DELETE, value="/products/{id}")
	public void deleteCategory(@PathVariable String id) {
		productService.deleteProduct(id);
	}


}
