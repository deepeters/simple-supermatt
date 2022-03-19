package ke.springboot.java.product;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> getAllProducts (String categoryId) {
		List<Product> products = new ArrayList<>();
		productRepository.findByCategoryId(categoryId).forEach(products::add); //get a film related to a particular topic
		return products;
	}
	
	public Optional<Product> getProduct(String id) {
		return productRepository.findById(id);
	}
	
	public void addProduct(Product product) {
		productRepository.save(product);
	}

	public void updateProduct(Product product) {
		productRepository.save(product);
	}

	public void deleteProduct(String id) {
		productRepository.deleteById(id);
	}

}
