package ke.springboot.java.product;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, String> {
	
	
	//public List<Film> findByName (String name);
	//public List<Film> findByDescription (String description);
	
	//public List<Product> findByCategoryId (String topic);

}
